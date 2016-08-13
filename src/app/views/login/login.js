"use strict";

angular.module('app.login', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/login', {
        templateUrl: 'app/views/login/login.html',
        controller: 'LoginCtrl'
    });
}])

.controller('LoginCtrl', function () {

});