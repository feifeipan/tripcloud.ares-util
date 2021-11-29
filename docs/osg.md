#	@ctrip/ares-util/osg

本模块封装了 [OSG][^osg] 接口访问方法，使开发者可以更加便利地使用 [OSG][^osg] 接口。

[OSG][^osg] 是 OPS Service Gateway 的简称。查看[服务清单](http://osgui.ops.ctripcorp.com/home.htm)，先申请后使用。

##	Get Started

```javascript
const osg = require('@ctrip/ares-util/osg');
osg
	.request(
		'PLEASE_INPUT_YOUR_OWN_TOKEN',
		'queryEmpBaseInfo',
		{
			"empAccount":"xc_zhang",
		}
	)
	.then(data => {
		// ...
	})
	.catch(ex => {
		// ...
	})
	;
```

##	API

*	Promise __osg.request__(token, apiCode, requestBody)  
	执行查询并取得返回的结果。

[^osg]: http://conf.ctripcorp.com/display/OPS/OPS+Service+Gateway