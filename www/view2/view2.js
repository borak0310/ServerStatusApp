'use strict';

angular.module('myApp.view2', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/view2', {
        templateUrl: 'view2/view2.html',
        controller: 'View2Ctrl'
      });
    }])

    //未來會是以 ajax 代換掉內容
    .controller('View2Ctrl', ['$scope',function($scope) {
          $scope.threading='11';
          $scope.cpuStatus='10%';
          $scope.heapMemory='512MB';
          $scope.heapMaxMemory='1024MB';
          $scope.activeThread='45';
          $scope.garbageCollection='26';
    }]);