var myApp = angular.module('myApp', ['ngRoute']);

// config for angular-route
myApp.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    template: '<div><h1>Who do you want to high five?  Choose carefully.</h1></div>',
    controller: 'homecontroller as hc'
  }).when('/may', {
    templateUrl: '/views/pages/may.html',
    controller: 'agentMay as am'
  }).when('/coulson', {
    templateUrl: '/views/pages/coulson.html',
    controller: 'agentCoulson as ac'
  }).when('/fury', {
    templateUrl: '/views/pages/fury.html',
    controller: 'directorFury as df'
  }).otherwise({ redirectTo: '/'});
  $locationProvider.html5Mode(true);
});
