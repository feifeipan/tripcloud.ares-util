#	Change Log

##	version 5.4.1 @ 2021-05-08

*	Is submodule `oss`, adjust strategy about whether or not proxy is activated.
	调整 `oss` 模块使用代理的策略，增加根据 IDC 决定是否启用代理的考虑。

##	version 5.4.0 @ 2021-05-08

*	Regard environment LPT as one of FAT environments.  
	将 LPT 环境名归类为 FAT。

##	version 5.3.3 @ 2021-05-07

*	Fix bug where submodule `oss` SHOULD NOT depend on proxy while running in Aliyun instances.  
	修正错误：`oss` 模块在阿里云实例中运行时，不依赖代理，但之前的版本中恰恰搞反了。

##	version 5.3.2 @ 2021-04-21

*	Sumodule `oss` will adopt special internal config (aliyun.internal.json) when running in *-ALI instances.   
	`oss` 模块在阿里云实例中运行时，使用特定的内部连接配置。

##	version 5.3.0 @ 2021-04-19

*	Update preferred proxy for IDCs on public cloud.  
	更新公有云 IDC 指定代理名单。

*	New function `idc.isALI()` added.
*	New function `idc.isPublic()` added.

*	Submodule `oss` will choose proxy according to IDC-first rule.  
	子模块 `oss` 中将优先使用 IDC 指定代理。

##	version 5.2.2 @ 2021-03-09

*	Regard hostnames "*.tripqate.com" as QATE hostnames.  
	将域名 *.tripqate.com 认定为测试环境域名。

##  version 5.2.1 @ Nov 30th, 2020

*   Submodule `logger`: Cat `error.toString()` instead of `error`.

##	version 5.2.0 @ May 22nd, 2020

*	Submodule `proxy`: New proxy `RBPROXY` added.

##	version 5.1.1 @ May 8th, 2020

*	Submodule `oss`: Disable proxy in local environments.

##  version 5.1.0 @ Mar 20th ,2020

*   New function `oss.forEachObject()` added.

##	version 5.0.0 @ Mar 11th, 2020

*	Sub module `runtime-config` added.
*	New bucket `ares-tree` actived in `oss`.

##	version 4.8.0 @ Feb 24th, 2020

*	Fix bug in the `env.isQate()` method.
*	Make `oss.getConfig()` accept more arguments.

##	version 4.7.0 @ Feb 24th, 2020

*	In `oss` submodule, read proxy name from qconfig.

##	version 4.5.0 @ Feb 21st, 2020

*	`gitlab` added.

##	version 4.4.0 @ Feb 20th, 2020

*	New optional parameter `options.mapper` for `oss.putDirectory(options)`.

##	version 4.3.0 @ Jan 17th, 2020

*	`domain` is enabled to recognize idc SHARB.

##	version 3.2.0 @ Jan 6th, 2020

*	`proxy` added.

##	version 3.1.2 @ Nov 14th, 2019

*	`domain` updated to recognize YMQ-AWS IDC.

##	version 3.1.0 @ Oct 30th, 2019

*	`idc.MONTREAL` added.

##	version 3.0.0 @ Sep 6th, 2019

*	`osg` added.

##	version 2.4.0 @ Sep 4th, 2019

*	`idc.<IDCNAME>` added.
*	`idc.getHttpProxy()` added.

##	version 2.3.0 @ Aug 31st, 2019

*	`domain` is enabled to recognize idc SIN-AWS.

##	version 2.2.0 @ Aug 19th, 2019

*	New function `idc.isAWS()` added.

##	version 2.1.2 @ Jul 19th, 2019

*	Regard *.qa.nt.tripcorp.com as QATE hostname in `hostname.js`.

##	version 2.0.2 @ Jun 19th, 2019

*	Add `domain` and `idc` to main exports.

##	version 1.1.0 @ Apr 22nd, 2019

*	New site "ARES.I18N" added.

##	version 1.0.1 @ Apr 12th, 2019

*	Main entrance `index.js` added.