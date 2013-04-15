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
  })
  .filter('getPosition', function() {
    return function(text) {
      var hour = text.substring(0, 2);
      var minute = text.substring(2);

      minute = minute * 100 / 60;
      if (minute === 0) {
        minute = '00';
      }

      return hour+minute-1400+20+10;
    };
  })
   .filter('getHeight', function() {
    return function(end, start) {
      var endHour = end.substring(0, 2);
      var endMinute = end.substring(2);
      var startHour = start.substring(0, 2);
      var startMinute = start.substring(2);

      endMinute = endMinute * 100 / 60;
      if (endMinute === 0) {
        endMinute = '00';
      }
      startMinute = startMinute * 100 / 60;
      if (startMinute === 0) {
        startMinute = '00';
      }

      return (endHour+endMinute)-(startHour+startMinute);
    };
  })
  ;
