---
title: 先完成，再完美
date: 2023-11-09
updated: 2023-11-09
categories: 朝花夕拾
hide: index
---

今天做一个心跳包的功能时，我跟客户端说用普通的二进制流响应给他，他说他的 websocket 都是走的一套处理流程，全部用 proto 编码。如果用 proto 编码，我在底层框架，每次都要解码发送的数据，校验这个包是不是心跳包。我说那么协议里面，加一个字节标识这个包是数据包还是心跳包，他也懒得改协议，说坚决不动，因为他改起来很麻烦。

经过一番讨论后，结果就是，拿一个特殊路由，标识心跳包，不去改协议。我妥协了，但其实我并不满意这种做法，给特殊的路由，本质上就是侵入了业务路由层，心跳包跟业务是无关的。在协议部分，还会进行 proto 编码解码，本身这种事应该放在分发器里去做。

互相尊重吧，有时，完成比完美更重要，只要大方向对，无关紧要的小细节可以放放。没什么办法，总不能因为这种事吵起来吧，不值当。我想开窗，我就不能提开窗，我要说开门。然后，他就会同意在墙上开窗了。

<!-- more -->