'use strict';

angular.module('roadburnCalendarApp', ['LocalStorageModule'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .filter('removeNumbers', function() {
    return function(text) {
      return text.substring(3);
    };
  });
