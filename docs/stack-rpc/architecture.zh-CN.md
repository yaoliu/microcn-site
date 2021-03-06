---
order: 4
title: 架构
---

Micro 为构建微服务提供了一些基本模板，目标就是要让开发分布式系统尽可能地简化。因为微服务自身就是一个结构，所以 micro 希望通过工具在逻辑层面上进行职责分离。

可以查看这篇博客了解 micro 的[https://micro.mu/blog/2016/04/18/micro-architecture.html](https://micro.mu/blog/2016/04/18/micro-architecture.html) 详情。

本节更多是说明 micro 是由哪些库组成的，以及这些组成 micro 的库之间的彼此联系。

## 运行时

### API

API 模块，它的身份其实就是一个网关或者代理层，它的能力就是让一个单一的入口可以去访问微服务。API 工作在我们的软件服务架构的边缘。

<p align="center">
  <img src="{{site.baseurl}}/images/api.png" />
</p>

### Web

Web 模块提供与运行环境可视化交互的能力。未来它也会成为 web 微服务的一种聚合方式。它包含了代理到 web 服务 app 的入口。它会把 http 请求转成向 RPC 请求并转发到对应的服务。比如 **/[name]** 就会被路由到注册了的服务上。Web 模块会以"go.micro.web."（这个前缀是可以配置的）作为服务名前缀注册 ，然后相关请求反射代理到它上面。

<p align="center">
  <img src="{{site.baseurl}}/images/web.png" />
</p>

### Proxy

命令行工具远程请求代理

<p align="center">
  <img src="{{site.baseurl}}/images/car.png" />
</p>

### Bot

Bot 模块可以理解为一个可内嵌在服务平台的小机器人，它可以提供与常见的聊天工具比如 Slack、HipChat、XMPP 等等进行关于服务状态的交互。它可以通过在聊天工具中发送消息来进行 CLI 操作。可以根据需要来增加指令完成自定义的任务。

<p align="center">
  <img src="{{site.baseurl}}/images/bot.png" />
</p>

### CLI

CLI 模块很好理解，它是 go-micro 的命令行工具，提供与实际运行环境的可视化交互的能力。

## Plugins

Go-Micro 支持通过插件的方式管理运行时，更多内容可查看[runtime-plugins](runtime-plugins.html)。
