#	@ctrip/ares-util/oss

OSS accessor.

##	Table of Contents

* [Get Started](#get-started)
* [API](#api)
	* [oss.deleteObject](#ossdeleteobject)
	* [oss.getObject](#ossgetobject)
	* [oss.headObject](#ossheadobject)
	* [oss.putObject](#ossputobject)
	* [oss.putDirectory](#ossputdirectory)

##	Get Started

Depenency `ceph` and `ceph-sync` is required and SHOULD be installed by hand.

A config JSON file is required at `<APP_HOME>/CEPH.conn/aliyun.json` which looks like:
```javascript
{
	"endPoint"        : "http://oss-cn-shanghai.aliyuncs.com/",
	"accessKey"       : "<ACCESS_KEY>",
	"secretAccessKey" : "<SECRET_ACCESS_KEY>",
	"bucketInDomain"  : true,
	"vendor"          : "aliyun"
}
```
Here, `<APP_HOME>` is the directory where the application's start-up js file located.

Then, the sub module will work:
```javascript
const oss = require('@ctrip/ares-util/oss');
```

##	API

###	oss.deleteObject

*	Promise __oss.deleteObject__( Object *options* )    

Parameters:
*	__options__ *Object*
	*	__options.domain__ *string*
	*	__options.name__ *string*

###	oss.getConfig

*	JSON __oss.getConfig__( string *name* )    

Get value of property in QConfig file [100013666:oss.json](http://qconfig.ctripcorp.com/webapp/page/index.html#/qconfig/100013666/resources:/oss.json?status=PUBLISH).  
读取 QConfig 配置文件 [100013666:oss.json](http://qconfig.ctripcorp.com/webapp/page/index.html#/qconfig/100013666/resources:/oss.json?status=PUBLISH) 中的属性值。

Parameters:
*	__name__ *string*	

###	oss.getObject

*	Promise __oss.getObject__( Object *options* )    

Parameters:
*	__options__ *Object*
	*	__options.domain__ *string*
	*	__options.name__ *string*

###	oss.headObject

*	Promise __oss.headObject__( Object *options* )    

Parameters:
*	__options__ *Object*
	*	__options.domain__ *string*
	*	__options.name__ *string*

###	oss.putObject

*	Promise __oss.putObject__( Object *options* )    

Parameters:
*	__options__ *Object*
	*	__options.domain__ *string*
	*	__options.name__ *string*
	*	__options.body__ *string* | *Buffer* | *stream*
	*	__options.bucket__ *string* OPTIONAL
	*	__options.meta__ *object* OPTIONAL
	*	__options.contentType__ *string* OPTIONAL

###	oss.putDirectory

*	Promise __oss.putDirectory__( Object *options* )    

Parameters:
*	__options__ *Object*
	*	__options.domain__ *string*
	*	__options.pathname__ *string*
	*	__options.logger__ *Function*
