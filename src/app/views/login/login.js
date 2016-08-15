"use strict";

angular.module('app.login', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/login', {
            templateUrl: 'app/views/login/login.html',
            controller: 'LoginCtrl'
        });
    }])

    .controller('LoginCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.sendLogin = function () {
            console.log($scope.login + ' ' + $scope.pswd);
            $http({method: 'POST', url: '/login'});
        }


    }]);
