#	@ctrip/ares-util/domain

提供域的信息。

注意：__域__ 和 __域名__ 或主机名有所区别。

##	Get Started

```javascript
const domain = require('@ctrip/ares-util/domain');

domain.currentIntranet();
// E.g. RETURN ".ctripcorp.com"
```

##	API

*	string | null __domain.currentIntranet__()  
	根据当前环境和 IDC 信息返回相应的内部域。  
	如果当前环境或 IDC 不可识别，则返回 `null·。
