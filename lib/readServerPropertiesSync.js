'use strict';

const
	/* built-in */
	fs = require('fs')
	
	/* NPM */
	, properties = require('properties')
	
	/* in-package */
	;

const PROPERTIES_PATHNAME = 'server.properties';

let info = undefined;
function read() {
	if (typeof info != 'undefined') {
		return info;
	}
	
	try {
		let content = fs.readFileSync(PROPERTIES_PATHNAME, 'utf8');
		info = properties.parse(content);
	} catch(ex) {
		info = null;
	}
	return info;
}

module.exports = read;