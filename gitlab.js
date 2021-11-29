'use strict';

const MODULE_REQUIRE = 1
	/* built-in */
	, fs = require('fs')
	, path = require('path')
	
	/* NPM */
	, downloadProject = require('gitlab-rest/downloadProject')
	
	/* in-package */
	;

let _tokens = {};
function _getToken(name) {
	if (!_tokens[name]) {
		let pathname = path.join(path.dirname(process.mainModule.filename), 'token', `${name}.token`);
		_tokens[name] = fs.readFileSync(pathname, 'utf8');
	}
	return _tokens[name]; 
}

/**
 * @param {string} options.target
 * @param {string} options.url
 * @param {string} options.ref
 */
function download(options) {
	const domain = 'git.ctripcorp.com';
	let namespace, project_name;

	if (/^git@(git\.dev\.sh\.ctripcorp\.com|git\.ctripcorp\.com):(.+)\.git$/.test(options.url)) {	
		[ namespace, project_name ] = RegExp.$2.split('/');		
	}
	else if (/^http:\/\/(git\.dev\.sh\.ctripcorp\.com|git\.ctripcorp\.com)\/(.+)\.git$/.test(options.url)) {	
		[ namespace, project_name ] = RegExp.$2.split('/');
	}
	else {
		return Promise.reject(new Error(`unsupported repo: ${options.url}`));
	}

	return downloadProject({
		private_token: _getToken(domain),
		endpoint : `http://${domain}/api/v3`,
		namespace,
		project_name,
		ref      : options.ref,
		target   : options.target,
	});
}

module.exports = {
	download,
};