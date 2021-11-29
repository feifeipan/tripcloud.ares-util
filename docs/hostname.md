#	@ctrip/ares-util/hostname

该模块提供对静态资源服务相关域名的检索支持。

##	Get Started

```javascript
const hostname = require('@ctrip/ares-util/hostname');

hostname.find({
	site    : 'ARES.WEBRESOURCE',
	env     : 'UAT',
	primary : 'webresource.c-ctrip.com',
})
// RETURN
// [ "webresource.uat.qa.nt.ctripcorp.com",
//   "pic.uat.qa.nt.ctripcorp.com" ]

hostname.isQATE("webresource.uat.qa.nt.ctripcorp.com");
// RETURN true
```

##	API

*	string[] __hostname.find__( Object *options* )
*	boolean __hostname.isQATE__( string *hostname* )
*	boolean __hostname.isIntranet__( string *hostname* )

Parameters:
*	__options.site__ string  
	所属站点。  
	这是一个枚举值，参见[模块 site 的说明文档](./site.md)。

*	__options.env__ string  
	所属环境。  
	这是一个枚举值，参见[模块 env 的说明文档](./env.md)。

*	__options.primary__ string  
	归属的主域名。  
	过去一个静态资源站点中，根据内容不同，会分发至不同的域名下。因此每个站点指定了一个主域名。

*	__options.isMain__ boolean  
	只查询站点的主域名。