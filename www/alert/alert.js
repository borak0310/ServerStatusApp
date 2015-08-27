'use strict';

angular.module('myApp.alert', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/alert', {
            templateUrl: 'alert/alert.html',
            controller: 'AlertCtrl'
        });
    }])

    .controller('AlertCtrl', function ($scope) {
        $scope.alertList = [
            {serverIp: '172.17.120.111',serverName: 'JBOSS AP1',serverMsg: '記憶體不足'},
            {serverIp: '172.17.120.112', serverName: 'JBOSS AP2',serverMsg:'CPU LOAD過高'},
            {serverIp: '172.17.120.113', serverName: 'JBOSS AP3',serverMsg:'網路連線數過多'},
            {serverIp: '172.17.120.114', serverName: 'JBOSS AP5',serverMsg:'網路連線數過多'},
            {serverIp: '172.17.120.115', serverName: 'JBOSS AP6',serverMsg:'記憶體不足'}
        ];

    });