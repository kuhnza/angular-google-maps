/*
 * angular-google-maps
 *
 * Copyright (c) 2014 "kuhnza" David Kuhn
 * Licensed under the MIT license.
 * https://github.com/kuhnza/angular-google-maps/blob/master/LICENSE
 */

'use strict';

angular.module('google.maps', [])
	.directive('gMap', ['$window', function ($window) {
		return {
			restrict: 'A',
			scope: {
				markerConfigs: '=markers',
				options: '=?'
			},
			link: function ($scope, element) {
				var maps = $window.google.maps,
					map = new maps.Map(element[0], $scope.options),
					markers = {};

				$scope.markerConfigs = $scope.markerConfigs || {};

				updateMarkers();

				$scope.$watch('markerConfigs', updateMarkers, true);  // yikes! lets hope the list doesn't get too big.

				function updateMarkers(newValue, oldValue) {
					var bounds = new maps.LatLngBounds(),
						marker;

					_.each(oldValue, function (marker, id) {
						if (!newValue[id]) removeMarker(id);
					});

					_.each(newValue, function (config, key) {
						if (_.isArray($scope.markerConfigs) && !_.has(config, 'id')) {
							throw 'Markers must include an id property when passed in an array.';
						}
						config.id = config.id || key;

						marker = addOrUpdateMarker(config);
						bounds.extend(marker.getPosition());
					});

					if (markerCount() > 0) {
						map.fitBounds(bounds);
					}
				}

				function addOrUpdateMarker(config) {
					var id = config.id;

					if (markers[id]) {
						markers[id].setOptions(config);
					} else {
						markers[id] = new maps.Marker(config)
					}

					markers[id].setMap(map);
					return markers[id];
				}

				function removeMarker(id) {
					markers[id].setMap(null);
					delete markers[id];
				}

				function markerCount() {
					var count = 0;

					if (_.isArray(markers)) {
						count = markers.length;
					} else if (_.isObject(markers)) {
						count = _.values(markers).length;
					}

					return count;
				}
			}
		}
	}]);
