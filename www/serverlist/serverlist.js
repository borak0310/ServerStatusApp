/**
 * Created by BorakChen on 2015/7/11.
 */

'use strict';

angular.module('myApp.serverlist', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/serverlist', {
            templateUrl: 'serverlist/serverlist.html',
            controller: 'ServerListCtrl'
        });
    }])

    .controller('ServerListCtrl', function ($scope) {
        $scope.serverList = [
            {serverIp: '172.17.120.126',serverName: 'JBOSS AP1'},
            {serverIp: '172.17.120.130', serverName: 'JBOSS AP2'},
            {serverIp: '172.17.120.111', serverName: 'JBOSS AP3'},
            {serverIp: '172.17.120.112', serverName: 'JBOSS AP4'},
            {serverIp: '172.17.120.113', serverName: 'JBOSS AP5'},
            {serverIp: '172.17.120.114', serverName: 'JBOSS AP6'},
            {serverIp: '172.17.120.115', serverName: 'JBOSS AP7'},
            {serverIp: '172.17.120.116', serverName: 'JBOSS AP8'},
            {serverIp: '172.17.120.117', serverName: 'JBOSS AP9'}
        ];


    });