'use strict';


function format() {
}

format.recycled = function(type) {
	return type == 'folder'
		? 'application/recycled.folder+json'
		: 'application/recycled+json'
		;
};

const ALL = [
	'application/recycled.folder+json',
	'application/recycled+json',
];

function isReserved(contentType) {
	return ALL.includes(contentType);
}

function isRecycled(contentType) {
	return [
		'application/recycled.folder+json',
		'application/recycled+json',
	].includes(contentType);
}

module.exports = {
	format,
	isReserved,
	isRecycled,
};