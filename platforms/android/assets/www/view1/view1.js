'use strict';

angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', function ($scope) {
        $scope.serverStatusList = [
            {serverName: 'JBOSS AP1', cpu: '50', mem: '20', conn: '18', status: 'OK'},
            {serverName: 'JBOSS AP2', cpu: '51', mem: '80', conn: '10', status: 'OK'},
            {serverName: 'JBOSS AP3', cpu: '40', mem: '12', conn: '13', status: 'OK'},
            {serverName: 'JBOSS AP4', cpu: '20', mem: '33', conn: '20', status: 'OK'},
            {serverName: 'JBOSS AP5', cpu: '30', mem: '26', conn: '10', status: 'OK'},
            {serverName: 'JBOSS AP6', cpu: '56', mem: '31', conn: '5', status: 'OK'},
            {serverName: 'JBOSS AP7', cpu: '70', mem: '20', conn: '2', status: 'OK'},
            {serverName: 'JBOSS AP8', cpu: '33', mem: '10', conn: '9', status: 'OK'},
            {serverName: 'JBOSS AP9', cpu: '10', mem: '30', conn: '22', status: 'OK'}
        ];

    });