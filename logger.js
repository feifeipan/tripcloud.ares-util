'use strict';

// const MODULE_REQUIRE = 1
// 	/* built-in */
	
// 	/* NPM */
// 	// , ctriputil = require('ctriputil')
	
// 	/* in-package */
// 	;

// const _metrices = {};

// INIT: {
// 	// const tags = {
// 	// 	vendor: null, 
// 	// 	action: null,
// 	// };

// 	// const interval = 60000;

// 	// const ossTime = new ctriputil.Metric({
// 	// 	name: 'ARES.OSS.TIME',
// 	// 	tags,
// 	// 	interval,
// 	// });

// 	// const ossSuccess = new ctriputil.Metric({
// 	// 	name: 'ARES.OSS.SUCCESS',
// 	// 	tags,
// 	// 	interval,
// 	// });
	
// 	// Object.assign(_metrices, { ossTime, ossSuccess });	
// 	// Object.values(_metrices).forEach(metric => metric.start());
// }

// class OssLog {
// 	constructor(tags) {
// 		this.start = Date.now();
// 		this.tags = tags;
// 	}

// 	take(promise) {
// 		return promise
// 			.then(data => {
// 				this.end();
// 				return data;
// 			})
// 			.catch(ex => {
// 				this.end(ex);
// 				return Promise.reject(ex);
// 			})
// 			;
// 	}

// 	end(error) {
// 		if (error) {
// 			ctriputil.cat.event('ARES.OSS', 'IO_ERROR', 
// 				typeof error.toString == 'function' ? error.toString() : error);
// 		}

// 		_metrices.ossTime.add(Date.now() - this.start, this.tags);
// 		_metrices.ossSuccess.add(error ? 0 : 1000, this.tags);
// 	}
// }

// /**
//  * @param  {string}  vendor
//  * @param  {string}  action
//  * @return {OssLog}
//  */
// function oss(vendor, action) {
// 	return new OssLog({ vendor, action });
// }

// module.exports = {
// 	oss,
// };

module.exports = {
	oss: (...args)=>{
		console.log(args);
	}
}