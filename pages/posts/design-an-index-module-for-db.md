---
title: 套你猴子，如何设计一个数据库的索引模块
date: 2023-09-08 17:25
updated: 2023-09-08 17:25
categories: 数据库
tags:
  - 数据结构
---

在数据库中，我们存储的通常是大量数据，因此没有办法一次把所有的数据都加载到内存中，从而利用内存的优势进行查询。那数据库是如何快速查询数据的呢？

如果我们“全表扫描”，即遍历每一条记录逐一对比，查询速度肯定很慢。

我们需要设计一种适合磁盘场景的特殊数据结构来提高查询速度，它应该满足对业务数据进行某种有序性的维护，可以结合内存，快速定位数据在磁盘中的位置，即“索引”。

一般数据库实现索引，都使用非线性数据结构，例如树状类型。为什么不使用线性数据结构呢？

因为在数据库场景中，我们随时都可能新增、修改数据，这涉及到数据移动，在磁盘上，这个代价是非常高的。而且线性数据结构存在平衡性，有利于查询的稳定性。非线性数据结构通常还支持检索某个范围内的数据，即范围查询。

二叉查找树做数据库索引的数据结构怎么样？

二叉查找树任意字段的查询一般只需要 log(n) 的复杂度，在百万级的数据存储场景，二叉查找树也只需要 20 层的高度就可以容纳全部数据。

看起来还蛮不错嘛。不过在数据库中，除了考虑计算成本，还需要考虑因为磁盘的读取时间。如果我们的数据库采用二叉查找树储数据，数据一多，层级必然不会少，层与层之间的数据在物理介质上基本不连续，多次的跳转查询，对应读取多次磁盘，就算将前几层的数据预加载到内存中，仍然可能多次跳转查询，这非常致命，因为磁盘的读取时间远远大于数据处理时间。

有没有什么数据结构，可以结合磁盘 I/O 的特性、保持树状结构的灵活呢？有！B+ 树。

在 MySQL、PostgreSQL 索引的实现中，都能看见 B+ 树的身影。

B+ 树由 B- 树演化而来，B 指的 balance 平衡。

> B- 树，它的每个节点包含：
> - 若干个键
> - 若干个指针域。指针域指向真实的存储数据
> 
> m 阶（m 代表树的每个节点做多可以包含的子节点数） B- 树的特性有：
> - 所有叶节点处于同一高度
> - 每个节点做多包含 m-1 个键和 m 条链
> - 根节点不为叶子节点时，至少有两个子节点
> - 除了根节点和叶子节点，每个节点最少包含 m/2 个键

它的设计思想是，将相关数据尽量集中在一起，以便一次读取多个数据，减少磁盘的读取次数。也就是利用了磁盘访问的局部性原理。计算机在读取磁盘时，往往以`页`为单位，如果页的大小与 B 树节点存储大小一致，就可以做到一次读取整个节点的全部内容！以 MySQL 的 InnDB 为例，它通常采用 16 KB 大小的页，如果我们的索引字段的大小为 8 bit，B+ 树上的每个节点就能包含 2048 个键，这意味着用 4 层的高度，就可以查找接近 10 亿级别的数据。

B+ 树的特点是：
- 一个节点可以容纳多个值
- 所有叶子节点之间都会通过双向指针串联在一起
- 追求“层”越少越好。除非节点已经达到了树的最大子节点数
- 中间节点不会存储指向真实数据的指针，只有叶子节点才存储，中间节点存储到达某叶子节点的路由信息
- 子节点中的值，与父节点中的值有严格的大小关系。如果父节点有 a 个值，那么子节点就有 a+1 个子节点。假设现在父节点有 5、15 两个值，就对应 3 个子节点，第一个子节点都是小于 5 的值，最后一个子节点都是大于 15 的值，中间的子节点是 5 到 15 之间的值

B+ 树相比 B- 树的优势就是在于高效的范围查询。假设我们查询所有年龄小于 35 岁的员工，我们只需要找到比 35 小的第一个元素，借助双向指针，就能快速获得所有小于 35 的元素。

如果能让叶子节点指向的数据也能在磁盘上连续存储，肯定可以获得更好的查询能力，目前似乎没有什么太好的办法。