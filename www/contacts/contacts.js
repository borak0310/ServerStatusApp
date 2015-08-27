'use strict';

angular.module('myApp.contacts', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/contacts', {
            templateUrl: 'contacts/contacts.html',
            controller: 'ContactsCtrl'
        });
    }])

    .controller('ContactsCtrl', function ($scope) {
        $scope.contactList = json;
    });

    var json = [
        {
            depName: 'BS2',
            apName: 'OMS',
            contact: [
                {empName:'oms a',tel:'123-456-789'},
                {empName:'oms b',tel:'223-456-789'},
                {empName:'oms c',tel:'323-456-789'}
            ]
        },
        {
            depName: 'BS2',
            apName: 'SOM',
            contact: [
                {empName:'som a',tel:'123-456-889'},
                {empName:'som b',tel:'223-456-989'},
                {empName:'som c',tel:'323-456-089'}
            ]
        },
        {
            depName: 'BS2',
            apName: 'CRM',
            contact: [
                {empName:'crm a',tel:'133-456-889'},
                {empName:'crm b',tel:'243-456-989'},
                {empName:'crm c',tel:'353-456-089'}
            ]
        }
    ];