#	@ctrip/ares-util/idc

提供 IDC 信息。

##	Get Started

```javascript
const idc = require('@ctrip/ares-util/idc');

idc.currentRaw();
// E.g. RETURN "SHAJQ"
```

##	API

*	string | null __idc.currentRaw__()  
	获取当前的原始 IDC 名称。  
	已知的 IDC 包括：
	*	FRA-AWS
	*	SFO-AWS
	*	SHA-AWS
	*	SIN-AWS
	* 	YMQ-AWS
	*	SHAJQ
	*	SHAOY
	*	NTGXH

*	boolean __idc.isAliyun__()  
	判断当前 IDC 是否托管于阿里云。
	
*	boolean __idc.isAWS__()  
	判断当前 IDC 是否托管于 AWS。

*	boolean __idc.isPublic__()  
	判断当前 IDC 是否托管于公有云。

*	string __idc.getHttpProxy__()  
	取得当前 IDC 中可用的代理服务地址。

本模块中还提供若干字符串常量，指代各个 IDC 的原始名称：
*	string __idc.FRANKFURT__  
	Represents FRA-AWS IDC.

*	string __idc.SHANGHAI__  
	Represents SHA-ALI IDC.

*	string __idc.SINGAPORE__  
	Represents SIN-AWS IDC.

*	string __idc.SAN_FRANCISCO__  
	Deprecated.  
	Represents SFO-AWS IDC.  
	
*	string __idc.MONTREAL__  
	Represents YMQ-AWS IDC.  

*	string __idc.CANADA__  
	Represents YMQ-AWS IDC.  