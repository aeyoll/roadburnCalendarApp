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
        '1. mainStage':[
          {'name':'Outside The Great Circle', 'start':'1430', 'end':'1445', 'selected': false},
          {'name':'Pallbearer', 'start':'1500', 'end':'1600', 'selected': false},
          {'name':'Penance', 'start':'1630', 'end':'1730', 'selected': false},
          {'name':'Gravetemple', 'start':'1800', 'end':'1900', 'selected': false},
          {'name':'High on Fire', 'start':'1930', 'end':'2045', 'selected': false},
          {'name':'Primordial', 'start':'2115', 'end':'2245', 'selected': false},
          {'name':'Th Psychadelic Warlords', 'start':'2315', 'end':'2450', 'selected': false},
        ],
        '2. Het Patronaat':[
          {'name':'The Black Heart Rebellion', 'start':'1430', 'end':'1530', 'selected': false},
          {'name':'The Atlas Moth', 'start':'1600', 'end':'1700', 'selected': false},
          {'name':'Royal Thunder', 'start':'1730', 'end':'1830', 'selected': false},
          {'name':'Lântlos', 'start':'1900', 'end':'2000', 'selected': false},
          {'name':'Intronaut', 'start':'2200', 'end':'2300', 'selected': false},
          {'name':'Mourning Beloveth', 'start':'2330', 'end':'2450', 'selected': false},
        ],
        '3. Green Room':[
          {'name':'Black Bombain', 'start':'1430', 'end':'1545', 'selected': false},
          {'name':'Blue Pills', 'start':'1615', 'end':'1715', 'selected': false},
          {'name':'Pilgrim', 'start':'1745', 'end':'1845', 'selected': false},
          {'name':'Candybar Planet', 'start':'1915', 'end':'2015', 'selected': false},
          {'name':'Maserati', 'start':'2045', 'end':'2145', 'selected': false},
          {'name':'Mourfull Congregation', 'start':'2215', 'end':'2315', 'selected': false},
          {'name':'Herder', 'start':'2345', 'end':'2445', 'selected': false},
        ],
        '4. Stage01':[
          {'name':'Dirk Series Microphonics', 'start':'1415', 'end':'1500', 'selected': false},
          {'name':'C R O W N', 'start':'1530', 'end':'1630', 'selected': false},
          {'name':'Robert Hampson', 'start':'1715', 'end':'1800', 'selected': false},
          {'name':'Magdalena Solis', 'start':'1830', 'end':'1930', 'selected': false},
          {'name':'Castle', 'start':'2015', 'end':'2130', 'selected': false},
          {'name':'Lord Mantis', 'start':'2145', 'end':'2245', 'selected': false},
          {'name':'The Midnight Ghost Train', 'start':'2315', 'end':'2415', 'selected': false},
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
