'use strict';

angular.module('roadburnCalendarApp')
  .controller('MainCtrl', function ($scope) {
    $scope.stages = [
      'Main Stage',
      'Her Patronaat',
      'Green Room',
      'Stage01'
    ];

    $scope.fridayShows =
      {
        'mainStage':[
          {'name':'Pallbearer','start':'1500', 'end':'1600', 'selected': false},
          {'name':'Penance','start':'1630', 'end':'1730', 'selected': false},
          {'name':'Gravetemple','start':'1800', 'end':'1900', 'selected': false},
          {'name':'High on Fire','start':'1930', 'end':'2045', 'selected': false},
          {'name':'Primordial','start':'2115', 'end':'2245', 'selected': false},
          {'name':'Th Psychadelic Warlords','start':'2315', 'end':'0050', 'selected': false},
        ],
        'Het Patronaat':[
          {'name':'Test','start':'1000'},
          {'name':'Test','start':'1000'}
        ],
        'Green Room':[
          {'name':'Test','start':'1000'},
          {'name':'Test','start':'1000'}
        ],
        'Stage01':[
          {'name':'Test','start':'1000'},
          {'name':'Test','start':'1000'}
        ]
      };
    $scope.saturdayShows =
      {
        'mainStage':[
          {'name':'Pallbearer','start':'1500', 'end':'1600'},
          {'name':'Penance','start':'1630', 'end':'1730'}
        ],
        'Het Patronaat':[
          {'name':'Test','start':'1000'},
          {'name':'Test','start':'1000'}
        ],
        'Green Room':[
          {'name':'Test','start':'1000'},
          {'name':'Test','start':'1000'}
        ],
        'Stage01':[
          {'name':'Test','start':'1000'},
          {'name':'Test','start':'1000'}
        ]
      };
    $scope.sundayShows =
      {
        'mainStage':[
          {'name':'Pallbearer','start':'1500', 'end':'1600'},
          {'name':'Penance','start':'1630', 'end':'1730'}
        ],
        'Het Patronaat':[
          {'name':'Test','start':'1000'},
          {'name':'Test','start':'1000'}
        ],
        'Green Room':[
          {'name':'Test','start':'1000'},
          {'name':'Test','start':'1000'}
        ],
        'Stage01':[
          {'name':'Test','start':'1000'},
          {'name':'Test','start':'1000'}
        ]
      };

  });
