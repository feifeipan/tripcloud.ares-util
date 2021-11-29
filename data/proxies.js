/**
 * @see
 *   金桥/欧阳代理服务器申请流程及相关信息
 *   http://conf.ctripcorp.com/pages/viewpage.action?pageId=14518294
 * 
 *   ProxyGate2接入说明
 *   http://conf.ctripcorp.com/pages/viewpage.action?pageId=168850661
 *   
 *   AWS 区域和终端节点
 *   https://docs.aws.amazon.com/zh_cn/general/latest/gr/rande.html
 */

 module.exports = [
	{
		"name"     : "PROXY1",
		"http"     : "http://proxy1.ctripcorp.com:8080",
		"https"    : "http://proxy1.ctripcorp.com:8080",
		"socket5"  : "proxy1.ctripcorp.com:1080",
		"deprecated" : true,
	},
	{
		"name"     : "PROXY2",
		"http"     : "http://proxy2.ctripcorp.com:8080",
		"https"    : "http://proxy2.ctripcorp.com:8080",
		"socket5"  : "proxy2.ctripcorp.com:1080",
	},
	{
		"name"     : "PROXY5",
		"http"     : "http://proxy5new.ctripcorp.com:8080",
		"https"    : "http://proxy5new.ctripcorp.com:8080",
		"socket5"  : "proxy5new.ctripcorp.com:1080",
	},
	{
		"name"     : "PROXY6",
		"http"     : "http://proxy6.ctripcorp.com:8080",
		"https"    : "http://proxy6.ctripcorp.com:8080",
		"socket5"  : "proxy6.ctripcorp.com:1080",
	},
	{
		"name"     : "PROXY7",
		"http"     : "http://proxy7.ctripcorp.com:8080",
		"https"    : "http://proxy7.ctripcorp.com:8080",
		"socket5"  : "proxy7.ctripcorp.com:1080",
	},
	{
		"name"     : "PROXY8",
		"http"     : "http://proxy8.ctripcorp.com:8080",
		"https"    : "http://proxy8.ctripcorp.com:8080",
		"socket5"  : "proxy8.ctripcorp.com:1080",
	},

	{
		"name"     : "PROXY15",
		"http"     : "http://proxy15new.ctripcorp.com:8080",
		"https"    : "http://proxy15new.ctripcorp.com:8080",
		"socket5"  : "proxy15new.ctripcorp.com:1080",
	},
	{
		"name"     : "PROXY16",
		"http"     : "http://proxy16.ctripcorp.com:8080",
		"https"    : "http://proxy16.ctripcorp.com:8080",
		"socket5"  : "proxy16.ctripcorp.com:1080",
	},
	{
		"name"     : "PROXY17",
		"http"     : "http://proxy17.ctripcorp.com:8080",
		"https"    : "http://proxy17.ctripcorp.com:8080",
	},
	{
		"name"     : "PROXY18",
		"http"     : "http://proxy18.ctripcorp.com:8080",
		"https"    : "http://proxy18.ctripcorp.com:8080",
	},
	{
		"name"     : "PROXYGATE2",
		"http"     : "http://proxygate2.ctripcorp.com:8080",
		"https"    : "http://proxygate2.ctripcorp.com:8080",
	},
	{
		"name"     : "NTPROXY",
		"http"     : "http://ntproxy.qa.nt.ctripcorp.com:8080",
		"https"    : "http://ntproxy.qa.nt.ctripcorp.com:8080",
		"socket5"  : "ntproxy.qa.nt.ctripcorp.com:1080",
	},
	{
		"name"     : "NTPROXY.CN",
		"http"     : "http://10.5.26.102:8080",
		"https"    : "http://10.5.26.102:8080",
		"socket5"  : "10.5.26.102:1080",
	},
	{
		"name"     : "GROUPPROXY",
		"http"     : "http://proxy.ctrip.ctripgroup.cn:8080",
		"https"    : "http://proxy.ctrip.ctripgroup.cn:8080",
		"socket5"  : "proxy.ctrip.ctripgroup.cn:1080",
	},
	{
		"name"     : "RBPROXY",
		"http"     : "http://10.62.66.7:8080",
		"https"    : "http://10.62.66.7:8080",
	}
];