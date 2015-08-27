/**
 * Created by BorakChen on 2015/7/11.
 */

'use strict';

angular.module('myApp.home', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'home/home.html'
        });
    }]);