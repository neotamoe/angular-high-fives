var myApp = angular.module('myApp', ['ngRoute']);

// config for angular-route
myApp.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/one', {
    templateUrl: '/views/pages/one.html',
    controller: 'agentMay as am'
  }).when('/two', {
    templateUrl: '/views/pages/two.html',
    controller: 'agentCoulson as ac'
  }).when('/three', {
    templateUrl: '/views/pages/three.html',
    controller: 'directoryFury as df'
  }).otherwise({ redirectTo: '/'});
  $locationProvider.html5Mode(true);
});
