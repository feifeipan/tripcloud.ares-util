#	@ctrip/ares-util/site

这个模块用于获取标准化的站点名称。
*	__ARES.I18N__
*	__ARES.WEBRESOURCE__
*	__ARES.WEBRESINT__
*	__ARES.WEBRESOURCE.ENGLISH__
*	`null`

##	Get Started

```javascript
const site = require('@ctrip/ares-util/site');

site.parse('online');
// return "ARES.WEBRESOURCE"

site.parse('pic.c-ctrip.com');
// return "ARES.WEBRESOURCE"
```

##	API

*	string | null __env.parse__( string *site_name* )
*	string | null __env.parseHostname__( string *hostname* )