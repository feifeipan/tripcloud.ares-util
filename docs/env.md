#	@ctrip/ares-util/env

这个模块用于根据指定信息，获取标准化的环境名：
*	__PROD__
*	__UAT__
*	__FAT__
*	`null`

注意：  
FWS 和 FAT 环境均会返回 __FAT__。  
其他环境均会返回 `null`。

##	Get Started

```javascript
const env = require('@ctrip/ares-util/env');

env.parse('prd');
// return "PROD"

env.parse('fat117');
// return "FAT"

env.parseHostname('webresource.uat.qa.nt.ctripcorp.com');
// return "UAT"
```

##	API

*	string | null __env.current__()  
	返回当前环境名称（标准化）。

*	string | null __env.currentRaw__()  
	返回当前环境名称（未经标准化）。

*	boolean __env.isProd__()  
	当前环境是否为生产环境。

*	boolean __env.isQate__()  
	当前环境是否为测试环境。

*	string | null __env.parse__( string *env_name* )  
	对环境名称进行标准化处理。

*	string | null __env.parseHostname( string *hostname* )  
	根据主机名返回其环境名（标准化）。