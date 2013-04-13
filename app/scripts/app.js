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
  })
  .filter('formatHour', function() {
    return function(text) {
      var hour = text.substring(0, 2);
      var minute = text.substring(2);

      if (hour === '24') {
        hour = '00';
      }
      else if (hour === '25') {
        hour = '01';
      }
      return hour+':'+minute;
    };
  });
