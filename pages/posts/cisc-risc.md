---
title: CISC&RISC从哪里来，到哪里去
date: 2023-06-05
updated: 2023-06-05
categories: 阅读航迹
---

读历史方知进退，明兴衰。从石器时代到青铜器时代，再到铁器时代，都是工具种类和材料的发展，推动了文明升级。每个时代也有每个时代的产物。

纵观计算机的发展史，理论到落地，创造了很多奇迹。

19 世纪，英国数学家 Babbage 设计了分析机，现代电脑的结构几乎是它的翻版，无非是主要部件替换成了大规模集成电路。

20 世纪初，图灵发表了论文《论可计算数及其在判定问题中的应用》，以最简单的方法抽象出统一的计算模型。

1946 年，在美国宾夕法尼亚大学诞生了第一台真正意义上的电子计算机 ENIAC。它占地面积约 170 $m^2$，耗电量 150 kw。

加点速，直接迈入芯片时代，芯片的定义是所有半导体元器件的统称，它是把一定数量的常用电子元件，以及这些元件之间的连线，通过半导体工艺集成在一起的、具有特定功能的电路。芯片相关的制造工艺（氧化、光刻、粒子注入等）极其复杂，是人类的制造极限。

芯片中的特例 CPU，即中央处理器，是 Intel 在 1971 年将运算器和控制器集成在一个芯片上创作出来的产物，称为 4004 微处理器，后被广泛应用于个人计算机以及高性能服务器中。

**CPU 的工作流程分为五个阶段：取指令、指令译码、执行指令、访存读取数据和结果写回**。

CPU 运行程序会循环执行上述五个阶段，它既是程序指令的执行者，又被程序中相关的指令所驱动，最后实现了相关的计算功能。这些功能再组合成相应算法，然后由多种算法共同实现功能强大的软件。

CPU 的工作离不开指令，指令离不开指令集架构，把指令看作`字`，指令集架构就是`新华字典`。

CPU 的指令集越丰富、每个指令完成的功能越多，为该 CPU 编写程序就越简单，这就是复杂指令集计算机体系结构 —— CISC。CISC 的典型代表是 X86 体系架构。CISC 的优势在于，用少量的指令就能实现非常多的功能，程序自身大小也会下降，减少内存空间的占用。缺点就是，这些复杂指令集，包含的指令数量多而且功能复杂，这就导致了硬件工程师想要设计制造这样的电路，难度非常高。

20 世纪 80 年代，芯片生产工艺的发展，CPU 上也实现了高速缓存、指令预取、分支预测、指令流水线等部件。不过，这些部件的加入引发了新问题，那些一次完成多个功能的复杂指令，执行的时候就变得捉襟见肘。

例如一些串操作指令同时依赖多个寄存器和内存寻址，这导致分支预测和指令流水线无法工作。

另外随着编译器技术的发展，各种高级编程语言开始盛行，它们生产的低级代码，比程序员手写的低级代码高效得多，使用的也是常用的几十条指令。

这导致人们开始向 CISC 发展的反方向思考，我们需要精简指令集计算机体系结构，由此 RISC 诞生了。

指令集被简化，这意味着简化了指令译码和执行指令，这使得 CPU 的新部件的效能得到了发挥。RISC 的代表产品是 ARM 和 RISC-V。

今天，RISC 与 CISC 早已没有明显界限，比如 ARM 中假如了越来越多的指令，X86 通过译码器把一条指令翻译成多条内部微码，相当于精简指令。
