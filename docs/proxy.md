#	@ctrip/ares-util/proxy

提供代理信息。

##	Get Started

```javascript
const proxy = require('@ctrip/ares-util/proxy');

proxy('https');
// E.g. RETURN "http://ntproxy.qa.nt.ctripcorp.com:8080"
```

##	API

*	string __proxy__( string *type* )    
*	string __proxy__( string *name*, string *type* )    

可选的 *type* 包括：
*	http
*	https
*	socket5
