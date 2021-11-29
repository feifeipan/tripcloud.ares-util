#	@ctrip/ares-util/logger

Logger for ARES only. This sub module peer-depends on `ctriputil.Metric`.

##	Table of Contents

* [Get Started](#get-started)
* [API](#api)
	* [logger.oss()](#loggeross)
	* [Class: OssLog](#class-osslog)
		* [osslog.take()](#osslogtake)
		* [osslog.end()](#osslogend)

##	Get Started

```javascript
const logger = require('@ctrip/ares-util/logger');

// Create an instance of OssLog before some action started.
let log = logger.oss('ALIYUN', 'OBJECT_PUT');

// CASE 1
// Accept a promise.
// When the promise resolved, `log.end()` will be triggered.
// Otherwise, if the promise rejected, `log.end(error)` will be triggered.
log.take(promise);

// CASE 2
// Manually invoke when the action done.
// Argument `error` is optional.
log.end(/* error */);
```

##	API

###	logger.oss()

*	OssLog __logger.oss__( string *vendor*, string *action* )    

Parameters:
*	__vendor__ *string*
	*	ALIYUN
	*	AWS
	*	CEPH 
*	__action__ *string*
	*	OBJECT_PUT
	*	OBJECT_GET
	*	OBJECT_HEAD

When an instance of `OssLog` created, the inner stopwatch begins to work.

###	Class: OssLog

####	osslog.take()

*	Promise __osslog.take__( Promise *promise* )    

The only parameter is an instance of `Promise`. And what returned is also an instance of `Promise` with primary data resolved or exception rejected.

####	osslog.end()

*	void __osslog.end__( [ Error *error* ])

Stop the inner stopwatch and submit two metrices:
*	[*ARES.OSS.TIME*](http://dashboard.fx.ctripcorp.com/#report/4534868)  
	Represents time in millseconds taken to finish the action. 

*	[*ARES.OSS.SUCCESS*](http://dashboard.fx.ctripcorp.com/#report/4534869).  
	Indicate whether the action is achieved successfully.  
	To make it easier for statistics, the value will be `1000` (success) or `0` (fail).