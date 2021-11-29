#	@ctrip/ares-util/runtime-config

这个模块用于读取 QConfig 100013666:ares.json 配置。

##	Get Started

本模块依赖 ctriputil，且必须在运行环境中手动安装 ctriputil。

```javascript
const rc = require('@ctrip/ares-util/runtime-config');

// 这是一个同步方法。
rc.get("eros", "tree.source");
```

##	API

*	mixed __runtimeConfig.get__( string *name* [, string *subname*, ... ] )