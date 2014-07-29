angular-google-maps
===================

Angular directive for the Google Places Autocomplete component.

Provides support for dynamic marker updates based on changes to the model.

Installation
------------

Install via bower: `bower install angular-g-maps`

Or if you're old skool, copy `src/google-maps.js` into your project.

Then add the script to your page (be sure to include the Google Maps API and underscore as well):

```html
<script src="https://maps.googleapis.com/maps/api/js"></script>
<script src="/bower_components/underscore/underscore.js"></script>
<script src="/bower_components/angular-google-maps/src/google-maps.js"></script>
```

Usage
-----

First add the dependency to your app:

```javascript
angular.module('myApp', ['google.maps']);
```

Then you can use the directive like so:

```html
<div g-map options="myMapOptions" markers="myMapMarkers" fit-to-markers="true"></div>
```

Examples
--------

* [Basic](example/basic.html)
* [Markers](example/markers.html)

Issues or feature requests
--------------------------

Create a ticket [here](https://github.com/kuhnza/angular-google-places-autocomplete/issues)

Contributing
------------

Issue a pull request including any relevent testing and updated any documentation if required.
