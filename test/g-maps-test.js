/*
 * angular-google-maps
 *
 * Copyright (c) 2014 "kuhnza" David Kuhn
 * Licensed under the MIT license.
 * https://github.com/kuhnza/angular-google-maps/blob/master/LICENSE
 */

'use strict';

describe('Directive: gMap', function () {

    var $parentScope, $isolatedScope, $compile;

    function compileAndDigest(html) {
        var element = angular.element(html);
        $compile(element)($parentScope);
        $parentScope.$digest();
        $isolatedScope = element.isolateScope();
    }

    beforeEach(module('google.maps'));

    beforeEach(inject(function ($rootScope, _$compile_) {
        $parentScope = $rootScope.$new();
        $compile = _$compile_;

        $parentScope.map = {
            options: {},
            markers: {}
        };

        compileAndDigest('<div g-map options="map.options" markers="map.markers" />');
    }));

    // TODO: write more tests!
    it('should initialize model', function () {

    });
});

