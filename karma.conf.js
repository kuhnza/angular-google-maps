/*
 * angular-google-maps
 *
 * Copyright (c) 2014 "kuhnza" David Kuhn
 * Licensed under the MIT license.
 * https://github.com/kuhnza/angular-google-maps/blob/master/LICENSE
 */
 
'use strict';

module.exports = function (config) {
	config.set({
		basePath: '',
		frameworks: ['jasmine'],
		logLevel: 'INFO',
		browsers: ['PhantomJS'],
		autoWatch: true,
		reporters: ['progress', 'coverage'],
		files: [
			'https://maps.googleapis.com/maps/api/js',
			'bower_components/underscore/underscore.js',			
			'bower_components/angular/angular.js',
			'bower_components/angular-mocks/angular-mocks.js',
			'src/**/*.js',
			'test/**/*.js'
		],
		preprocessors: {
			'src/**/*.js': 'coverage'
		},
		coverageReporter: {
			type: 'html',
			dir: 'coverage/'
		}
	});
};
