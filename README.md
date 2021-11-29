#   [@ctrip/ares-util][^reg]
__Utilities for Ares SDK__

[![ctrip npm version](http://npm.release.ctripcorp.com/badge/v/@ctrip/ares-util.svg?style=flat-square)][^reg]

[@ctrip/ares-util][^reg] 是为 Ares 解决方案相关的各类应用或模块的开发提供 API 支持，业务开发人员一般不直接依赖本套件。

本页中的链接如无法打开，请移步至模块[主页][^repo]。

##	Links

*	[主页][^repo]
*	[更新日志](CHANGELOG.md)

##  Sub Modules

*	__[@ctrip/ares-util/domain](docs/domain.md)__
*	__[@ctrip/ares-util/env](docs/env.md)__
*	__[@ctrip/ares-util/eros-mime](docs/eros.md)__
*	__[@ctrip/ares-util/gitlab](docs/gitlab.md)__
*	__[@ctrip/ares-util/hostname](docs/hostname.md)__
*	__[@ctrip/ares-util/idc](docs/idc.md)__
*	__[@ctrip/ares-util/oss](docs/oss.md)__
*	__[@ctrip/ares-util/logger](docs/logger.md)__
*	__[@ctrip/ares-util/proxy](docs/proxy.md)__
*	__[@ctrip/ares-util/runtime-config](docs/runtime-config.md)__
*	__[@ctrip/ares-util/site](docs/site.md)__

##	About

本套件的创建时间晚于 [@ctrip/ares-sdk][^reg.sdk]，以下子模块移植自该模块：
*	env
*	eros-mime
*	hostname
*	site

自 [@ctrip/ares-sdk@3.0.0][^reg.sdk] 起，该模块中的上述子模块改为依赖 [@ctrip/ares-util][^reg] 的同名子模块。

[^repo]: http://git.ctripcorp.com/ares/node-util
[^reg]: http://npm.release.ctripcorp.com/package/@ctrip/ares-util
[^reg.sdk]: http://npm.release.ctripcorp.com/package/@ctrip/ares-sdk