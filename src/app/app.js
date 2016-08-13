"use strict";

angular.module('app', [
    'ngRoute',
    'app.login'
])

.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    // $locationProvider.hashPrefix('!');
    //
    // $routeProvider.otherwise({redirectTo: '/view1'});
}]);