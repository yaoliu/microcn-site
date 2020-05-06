(window.webpackJsonp=window.webpackJsonp||[]).push([[219],{3238:function(n,s){n.exports={content:["article",["p","Micro 是开发微服务的工具库"],["h1","概览"],["p","Micro 重点工作服务方向是满足构建可伸缩的系统。Micro 包含了微服务的架构模式，并把它把转换成一系列构建平台的工具。Micro 深入复杂的分布式系统，且要把其简化抽象成众所周知的方式暴露给开发者使用。"],["p","技术本身是日新月异的。而那些基础的技术栈也总是会发生变动。Micro 工具插件化就是要处理这个问题。"],["p","Micro 的愿景是，在任何技术栈中都可插拔，使用 Micro 构建永不过时的系统。"],["h2","特性"],["p","micro 工具库由以下几个部分组成："],["ul",["li",["p",["strong","API Gateway:"]," API 网关作为单一的 http 入口，它使用服务发现中查询的服务地址，把请求动态路由到具体服务。网关允许我们建立可伸缩的后台微服务架构，并且让工作在前端的公共 API 更健壮。Micro API 基于服务发现拥有强大的路由能力，它可以处理 http、gRPC、websocket、消息推送事件等等。"]],["li",["p",["strong","Interactive CLI:"]," 交互式的命令行接口。CLI 通过终端可以描述、查询、直接与平台和服务进行交互。CLI 提供所有的命令让开发者明白微服务正在处理的事情。CLI 也包含了交互模式。"]],["li",["p",["strong","Service Proxy:"]," 服务代理，基于",["a",{title:null,href:"https://github.com/micro/go-micro"},"Go Micro"],"和",["a",{title:null,href:"https://github.com/micro/protocol"},"MUCP 协议"],"构建的透明的代理服务。它将服务发现、负载均衡、消息编码、中间件、传输及代理插件卸载到单一位置。"]]],["p","可以单独运行或与服务一起运行。"],["ul",["li",["p",["strong","Service Templates:"]," 服务生成模板，目的是快速生成服务代码，让编写代码飞起来。Micro 预置了一些模板用来编写服务。保持相同的方式编写服务，提高效率。"]],["li",["p",["strong","SlackOps Bot:"]," Slack 小机器人插件，当它运行中服务中时，这个插件允许开发者通过 Slack 消息来操作平台。MicroBot 插件提供聊天配置选项，这样就可以让团队通过向小机器人发送聊天消息来做一些我们希望它做的事，这里面当然也包含像动态发现服务一样创建 slack 命令。"]],["li",["p",["strong","Web Dashboard:"]," 通过 Web 管理控制台，可以直接在 Web 页面上查看服务的运行情况，展示端点信息，请求与响应状态，甚至直接向服务进行查询。管理控制台也有 CLI 交互页面提供给开发者在线上处理，就像直接操作终端一样。"]]],["h2","开始使用"],["ul",["li",["p",["a",{title:null,href:"#安装Micro"},"安装 Micro"]]],["li",["p",["a",{title:null,href:"#依赖"},"依赖"]]],["li",["p",["a",{title:null,href:"#服务发现"},"服务发现"]]],["li",["p",["a",{title:null,href:"#编写服务"},"编写服务"]]],["li",["p",["a",{title:null,href:"#示例"},"示例"]]],["li",["p",["a",{title:null,href:"#相关插件"},"相关插件"]]]],["h2","安装 Micro"],["pre",{lang:"shell",highlighted:'go get <span class="token operator">-</span>u github<span class="token punctuation">.</span>com<span class="token operator">/</span>micro<span class="token operator">/</span>micro'},["code","go get -u github.com/micro/micro"]],["p","也可以通过 Docker 安装"],["pre",{lang:"shell",highlighted:'docker pull micro<span class="token operator">/</span>micro'},["code","docker pull micro/micro"]],["h2","依赖"],["p","micro 工具库有两个依赖："],["ul",["li",["p",["a",{title:null,href:"#service-discovery"},"Service Discovery"]," - 用于服务名解析"]],["li",["p",["a",{title:null,href:"#protobuf"},"Protobuf"]," - 代码生成工具"]]],["h2","服务发现"],["p","服务发现用于服务名解析、路由、集中元数据。"],["p","Micro 使用",["a",{title:null,href:"https://github.com/micro/go-micro"},"go-micro"],"来向服务发现中心发送注册请求。"],["h3","Consul"],["p","安装并运行 Consul"],["pre",{lang:"shell",highlighted:'# install\nbrew install consul\n\n# run\nconsul agent <span class="token operator">-</span>dev'},["code","# install\nbrew install consul\n\n# run\nconsul agent -dev"]],["h3","mDNS"],["p","Micro 内置了 mDNS 组播系统，这是一种零依赖的服务注册发现机制，它是区别于有注册中心的替代方案。"],["p","通过在启动指令中传入",["code","--registry=mdns"]," 或者在",["strong","环境变量"],"中设置",["code","MICRO_REGISTRY=mdns"],"。"],["p","其实也可以不传，早期版本的 go-micro 默认注册中心是",["strong","consul"],"，现在换成了",["strong","mdns"]],["pre",{lang:"shell",highlighted:'# 使用命令行参数\nmicro <span class="token operator">-</span><span class="token operator">-</span>registry<span class="token operator">=</span>mdns list services\n\n# 使用环境变量\nMICRO_REGISTRY<span class="token operator">=</span>mdns micro list services`'},["code","# 使用命令行参数\nmicro --registry=mdns list services\n\n# 使用环境变量\nMICRO_REGISTRY=mdns micro list services`"]],["p","查看更多关于插件的资料：",["a",{title:null,href:"https://github.com/micro/go-plugins"},"go-plugins"],"."],["h2","Protobuf"],["p","Protobuf 功能是代码生成，可以免去手写一些模板化的代码。"],["pre",{lang:null,highlighted:'# 安装protobuf\nbrew install protobuf\n\n# 安装golang的protobuf代码生成器 protoc<span class="token operator">-</span>gen<span class="token operator">-</span>go\ngo get <span class="token operator">-</span>u github<span class="token punctuation">.</span>com<span class="token operator">/</span>golang<span class="token operator">/</span>protobuf<span class="token operator">/</span>{proto<span class="token punctuation">,</span>protoc<span class="token operator">-</span>gen<span class="token operator">-</span>go}\n\n# 安装micro的protobuf插件 protoc<span class="token operator">-</span>gen<span class="token operator">-</span>micro\ngo get <span class="token operator">-</span>u github<span class="token punctuation">.</span>com<span class="token operator">/</span>micro<span class="token operator">/</span>protoc<span class="token operator">-</span>gen<span class="token operator">-</span>micro'},["code","# 安装protobuf\nbrew install protobuf\n\n# 安装golang的protobuf代码生成器 protoc-gen-go\ngo get -u github.com/golang/protobuf/{proto,protoc-gen-go}\n\n# 安装micro的protobuf插件 protoc-gen-micro\ngo get -u github.com/micro/protoc-gen-micro"]],["p","更多资料请查看",["a",{title:null,href:"https://github.com/micro/protoc-gen-micro"},"protoc-gen-micro"],"。"],["h2","编写服务"],["p","上面说过 Micro 是有模板生成功能可以快速生成服务应用。"],["p","详情可以翻阅：",["a",{title:null,href:"https://github.com/micro/go-micro"},["strong","go-micro"]],"."],["h3","使用模板生成"],["p","下面演示使用",["code","micro new"],"命令来快速生成一个示例服务"],["p","生成的服务会被放到\\$GOPATH 的相对目录下："],["pre",{lang:null,highlighted:'micro new github<span class="token punctuation">.</span>com<span class="token operator">/</span>micro<span class="token operator">/</span>example'},["code","micro new github.com/micro/example"]],["p","刚这个命令生成的目录如下所示："],["pre",{lang:null,highlighted:'example<span class="token operator">/</span>\n\tDockerfile\t# A template docker file\n\tREADME<span class="token punctuation">.</span>md\t# A readme <span class="token keyword">with</span> command used\n\thandler<span class="token operator">/</span>\t# Example rpc handler\n\tmain<span class="token punctuation">.</span>go\t\t# The main Go program\n\tproto<span class="token operator">/</span>\t\t# Protobuf directory\n\tsubscriber<span class="token operator">/</span>\t# Example pubsub Subscriber'},["code","example/\n\tDockerfile\t# A template docker file\n\tREADME.md\t# A readme with command used\n\thandler/\t# Example rpc handler\n\tmain.go\t\t# The main Go program\n\tproto/\t\t# Protobuf directory\n\tsubscriber/\t# Example pubsub Subscriber"]],["p","然后使用",["code","protoc"],"把 proto 方便生成 go 源码"],["pre",{lang:null,highlighted:'protoc <span class="token operator">-</span><span class="token operator">-</span>proto_path<span class="token operator">=</span><span class="token punctuation">.</span> <span class="token operator">-</span><span class="token operator">-</span>micro_out<span class="token operator">=</span><span class="token punctuation">.</span> <span class="token operator">-</span><span class="token operator">-</span>go_out<span class="token operator">=</span><span class="token punctuation">.</span> proto<span class="token operator">/</span>example<span class="token operator">/</span>example<span class="token punctuation">.</span>proto'},["code","protoc --proto_path=. --micro_out=. --go_out=. proto/example/example.proto"]],["p","下面就可以像运行其它 go 语言程序一下执行下面的命令了："],["pre",{lang:null,highlighted:'go run main<span class="token punctuation">.</span>go'},["code","go run main.go"]],["h2","示例"],["p","刚我们通过",["code","micro new"],"生成了命令并跑了起来，下面我们测一下。"],["ul",["li",["p",["a",{title:null,href:"#list-services"},"列出所有服务"]]],["li",["p",["a",{title:null,href:"#get-service"},"获取服务信息"]]],["li",["p",["a",{title:null,href:"#call-service"},"调用服务"]]],["li",["p",["a",{title:null,href:"#run-api"},"执行 API"]]],["li",["p",["a",{title:null,href:"#call-api"},"调用 API"]]]],["h3","列出所有服务"],["p","通过服务发现注册的服务都可以被列出来"],["pre",{lang:"shell",highlighted:"micro list services"},["code","micro list services"]],["p","相关服务："],["pre",{lang:null,highlighted:'consul\ngo<span class="token punctuation">.</span>micro<span class="token punctuation">.</span>srv<span class="token punctuation">.</span>example\ntopic<span class="token punctuation">:</span>topic<span class="token punctuation">.</span>go<span class="token punctuation">.</span>micro<span class="token punctuation">.</span>srv<span class="token punctuation">.</span>example'},["code","consul\ngo.micro.srv.example\ntopic:topic.go.micro.srv.example"]],["p","示例中的注册了的应用使用的限定了的注册名",["code","go.micro.srv.example"],"，",["code","go.micro.srv"],"是后台服务名的默认前缀"],["h3","获取指定名的服务"],["p","每一个服务注册都是通过唯一的 id、地址及元数据。"],["pre",{lang:"shell",highlighted:'micro get service go<span class="token punctuation">.</span>micro<span class="token punctuation">.</span>srv<span class="token punctuation">.</span>example'},["code","micro get service go.micro.srv.example"]],["p","输出的结果："],["pre",{lang:null,highlighted:'service  go<span class="token punctuation">.</span>micro<span class="token punctuation">.</span>srv<span class="token punctuation">.</span>example\n\nversion latest\n\nID\tAddress\tPort\tMetadata\ngo<span class="token punctuation">.</span>micro<span class="token punctuation">.</span>srv<span class="token punctuation">.</span>example<span class="token operator">-</span>437d1277<span class="token operator">-</span>303b<span class="token operator">-</span><span class="token number">11e8</span><span class="token operator">-</span>9be9<span class="token operator">-</span>f40f242f6897\t<span class="token number">192.168</span><span class="token punctuation">.</span><span class="token number">1.65</span>\t<span class="token number">53545</span>\ttransport<span class="token operator">=</span>http<span class="token punctuation">,</span>broker<span class="token operator">=</span>http<span class="token punctuation">,</span>server<span class="token operator">=</span>rpc<span class="token punctuation">,</span>registry<span class="token operator">=</span>consul\n\nEndpoint<span class="token punctuation">:</span> Example<span class="token punctuation">.</span>Call\nMetadata<span class="token punctuation">:</span> stream<span class="token operator">=</span><span class="token boolean">false</span>\n\nRequest<span class="token punctuation">:</span> {\n\tname string\n}\n\nResponse<span class="token punctuation">:</span> {\n\tmsg string\n}\n\n\nEndpoint<span class="token punctuation">:</span> Example<span class="token punctuation">.</span>PingPong\nMetadata<span class="token punctuation">:</span> stream<span class="token operator">=</span><span class="token boolean">true</span>\n\nRequest<span class="token punctuation">:</span> {}\n\nResponse<span class="token punctuation">:</span> {}\n\n\nEndpoint<span class="token punctuation">:</span> Example<span class="token punctuation">.</span>Stream\nMetadata<span class="token punctuation">:</span> stream<span class="token operator">=</span><span class="token boolean">true</span>\n\nRequest<span class="token punctuation">:</span> {}\n\nResponse<span class="token punctuation">:</span> {}\n\n\nEndpoint<span class="token punctuation">:</span> <span class="token keyword">Func</span>\nMetadata<span class="token punctuation">:</span> subscriber<span class="token operator">=</span><span class="token boolean">true</span><span class="token punctuation">,</span>topic<span class="token operator">=</span>topic<span class="token punctuation">.</span>go<span class="token punctuation">.</span>micro<span class="token punctuation">.</span>srv<span class="token punctuation">.</span>example\n\nRequest<span class="token punctuation">:</span> {\n\tsay string\n}\n\nResponse<span class="token punctuation">:</span> {}\n\n\nEndpoint<span class="token punctuation">:</span> Example<span class="token punctuation">.</span>Handle\nMetadata<span class="token punctuation">:</span> subscriber<span class="token operator">=</span><span class="token boolean">true</span><span class="token punctuation">,</span>topic<span class="token operator">=</span>topic<span class="token punctuation">.</span>go<span class="token punctuation">.</span>micro<span class="token punctuation">.</span>srv<span class="token punctuation">.</span>example\n\nRequest<span class="token punctuation">:</span> {\n\tsay string\n}\n\nResponse<span class="token punctuation">:</span> {}'},["code","service  go.micro.srv.example\n\nversion latest\n\nID\tAddress\tPort\tMetadata\ngo.micro.srv.example-437d1277-303b-11e8-9be9-f40f242f6897\t192.168.1.65\t53545\ttransport=http,broker=http,server=rpc,registry=consul\n\nEndpoint: Example.Call\nMetadata: stream=false\n\nRequest: {\n\tname string\n}\n\nResponse: {\n\tmsg string\n}\n\n\nEndpoint: Example.PingPong\nMetadata: stream=true\n\nRequest: {}\n\nResponse: {}\n\n\nEndpoint: Example.Stream\nMetadata: stream=true\n\nRequest: {}\n\nResponse: {}\n\n\nEndpoint: Func\nMetadata: subscriber=true,topic=topic.go.micro.srv.example\n\nRequest: {\n\tsay string\n}\n\nResponse: {}\n\n\nEndpoint: Example.Handle\nMetadata: subscriber=true,topic=topic.go.micro.srv.example\n\nRequest: {\n\tsay string\n}\n\nResponse: {}"]],["h3","调用服务"],["p","通过 CLI 命令行接口来调用 RPC 服务，这次查询我们使用 JSON 来发送："],["pre",{lang:"shell",highlighted:'micro call go<span class="token punctuation">.</span>micro<span class="token punctuation">.</span>srv<span class="token punctuation">.</span>example Example<span class="token punctuation">.</span>Call <span class="token string">\'{"name": "John"}\'</span>'},["code",'micro call go.micro.srv.example Example.Call \'{"name": "John"}\'']],["p","输出的结果："],["pre",{lang:null,highlighted:'{\n\t<span class="token string">"msg"</span><span class="token punctuation">:</span> <span class="token string">"Hello John"</span>\n}'},["code",'{\n\t"msg": "Hello John"\n}']],["p","可以查看",["a",{title:null,href:"https://micro.mu/docs/cli.html"},"cli 文档来查看"],"更多信息。"],["p","下面，我们试一下通过 HTTP 来调用服务。"],["h3","执行 API"],["p","Micro API 本质上是一个 http 协议的网关接口，它会把动态路由到转到后台服务中。"],["pre",{lang:null,highlighted:'MICRO_API_HANDLER<span class="token operator">=</span>rpc \\\nMICRO_API_NAMESPACE<span class="token operator">=</span>go<span class="token punctuation">.</span>micro<span class="token punctuation">.</span>srv \\\nmicro api'},["code","MICRO_API_HANDLER=rpc \\\nMICRO_API_NAMESPACE=go.micro.srv \\\nmicro api"]],["p","说明信息："],["ul",["li",["p",["code","MICRO_API_HANDLER"]," http API 的触发方法"]],["li",["p",["code","MICRO_API_NAMESPACE"]," API 所属服务的命名空间 "]]],["h3","调用 API"],["p","发送一个 POST 请求到 API："],["pre",{lang:null,highlighted:'curl <span class="token operator">-</span>XPOST <span class="token operator">-</span>H <span class="token string">\'Content-Type: application/json\'</span> <span class="token operator">-</span>d <span class="token string">\'{"name": "John"}\'</span> http<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>localhost<span class="token punctuation">:</span><span class="token number">8080</span><span class="token operator">/</span>example<span class="token operator">/</span>call'},["code","curl -XPOST -H 'Content-Type: application/json' -d '{\"name\": \"John\"}' http://localhost:8080/example/call"]],["p","结果："],["pre",{lang:null,highlighted:'{<span class="token string">"msg"</span><span class="token punctuation">:</span><span class="token string">"Hello John"</span>}'},["code",'{"msg":"Hello John"}']],["p","更多详情信息翻看",["a",{title:null,href:"https://micro.mu/docs/api.html"},"api doc"],"。"],["h2","相关插件"],["p","Micro 是基于",["a",{title:null,href:"https://github.com/micro/go-micro"},"go-micro"],"来开发插件。"],["p","Go-micro 向分布式系统架构可抽离的基础部分提供抽象。"],["h3","可插拔特性"],["p","下面列表出的 Micro 特性都是可插拔的："],["ul",["li",["p","broker - 发布订阅消息的代理"]],["li",["p","registry - 服务发现与注册"]],["li",["p","selector - 客户端负载均衡"]],["li",["p","transport - 传输，请求-响应或者双向流"]],["li",["p","client - 管理以上特性的客户端"]],["li",["p","server - 管理以上特性的服务端"]]],["p","Find plugins at ",["a",{title:null,href:"https://github.com/micro/go-plugins"},"go-plugins"]],["h3","使用插件"],["p","插件的集成很简单，只需要创建个文件并引用这些插件即可。"],["pre",{lang:"go",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">(</span>\n\t<span class="token comment" spellcheck="true">// etcd v3 registry</span>\n\t<span class="token boolean">_</span> <span class="token string">"github.com/micro/go-plugins/registry/etcdv3"</span>\n\t<span class="token comment" spellcheck="true">// nats transport</span>\n\t<span class="token boolean">_</span> <span class="token string">"github.com/micro/go-plugins/transport/nats"</span>\n\t<span class="token comment" spellcheck="true">// kafka broker</span>\n\t<span class="token boolean">_</span> <span class="token string">"github.com/micro/go-plugins/broker/kafka"</span>\n<span class="token punctuation">)</span>'},["code",'import (\n\t// etcd v3 registry\n\t_ "github.com/micro/go-plugins/registry/etcdv3"\n\t// nats transport\n\t_ "github.com/micro/go-plugins/transport/nats"\n\t// kafka broker\n\t_ "github.com/micro/go-plugins/broker/kafka"\n)']],["h3","构建二进制文件"],["p","直接使用 Go 命令行工具链即可。"],["pre",{lang:"shell",highlighted:'# 本地打包\ngo build <span class="token operator">-</span>i <span class="token operator">-</span>o micro <span class="token punctuation">.</span><span class="token operator">/</span>main<span class="token punctuation">.</span>go <span class="token punctuation">.</span><span class="token operator">/</span>plugins<span class="token punctuation">.</span>go\n\n# 打包成docker镜像\nCGO_ENABLED<span class="token operator">=</span><span class="token number">0</span> GOOS<span class="token operator">=</span>linux go build <span class="token operator">-</span>a <span class="token operator">-</span>installsuffix cgo <span class="token operator">-</span>ldflags <span class="token string">\'-w\'</span> <span class="token operator">-</span>i <span class="token operator">-</span>o micro <span class="token punctuation">.</span><span class="token operator">/</span>main<span class="token punctuation">.</span>go <span class="token punctuation">.</span><span class="token operator">/</span>plugins<span class="token punctuation">.</span>go'},["code","# 本地打包\ngo build -i -o micro ./main.go ./plugins.go\n\n# 打包成docker镜像\nCGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -ldflags '-w' -i -o micro ./main.go ./plugins.go"]],["h3","激活插件"],["p","引用插件后如果要激活，那么可以使用命令行或者设置环境变量即可。"],["pre",{lang:"shell",highlighted:'# 命令行参数\nmicro <span class="token operator">-</span><span class="token operator">-</span>registry<span class="token operator">=</span>etcdv3 <span class="token operator">-</span><span class="token operator">-</span>transport<span class="token operator">=</span>nats <span class="token operator">-</span><span class="token operator">-</span>broker<span class="token operator">=</span>kafka <span class="token punctuation">[</span>其它命令<span class="token punctuation">]</span>\n\n# 环境变量\nMICRO_REGISTRY<span class="token operator">=</span>etcdv3 MICRO_TRANSPORT<span class="token operator">=</span>nats MICRO_BROKER<span class="token operator">=</span>kafka micro <span class="token punctuation">[</span>其它命令<span class="token punctuation">]</span>'},["code","# 命令行参数\nmicro --registry=etcdv3 --transport=nats --broker=kafka [其它命令]\n\n# 环境变量\nMICRO_REGISTRY=etcdv3 MICRO_TRANSPORT=nats MICRO_BROKER=kafka micro [其它命令]"]]],meta:{order:39,title:"Micro Runtime",filename:"docs/micro/runtime.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h1",href:"#概览",title:"概览"},"概览"]],["li",["a",{className:"bisheng-toc-h2",href:"#特性",title:"特性"},"特性"]],["li",["a",{className:"bisheng-toc-h2",href:"#开始使用",title:"开始使用"},"开始使用"]],["li",["a",{className:"bisheng-toc-h2",href:"#安装-Micro",title:"安装 Micro"},"安装 Micro"]],["li",["a",{className:"bisheng-toc-h2",href:"#依赖",title:"依赖"},"依赖"]],["li",["a",{className:"bisheng-toc-h2",href:"#服务发现",title:"服务发现"},"服务发现"]],["li",["a",{className:"bisheng-toc-h2",href:"#Protobuf",title:"Protobuf"},"Protobuf"]],["li",["a",{className:"bisheng-toc-h2",href:"#编写服务",title:"编写服务"},"编写服务"]],["li",["a",{className:"bisheng-toc-h2",href:"#示例",title:"示例"},"示例"]],["li",["a",{className:"bisheng-toc-h2",href:"#相关插件",title:"相关插件"},"相关插件"]]]}}}]);