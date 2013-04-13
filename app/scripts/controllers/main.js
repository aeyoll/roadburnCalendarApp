'use strict';

angular.module('roadburnCalendarApp')
  .controller('MainCtrl', function ($scope, localStorageService) {
    $scope.stages = [
      'Main Stage',
      'Her Patronaat',
      'Green Room',
      'Stage01'
    ];

    var shows = localStorageService.get('shows');
    if (shows !== null) {
      $scope.shows = JSON.parse(shows);
    }
    else {
      $scope.shows =
        {
          '1. Tuesday': {
            '1. mainStage':[
              {'name':'Outside The Great Circle', 'start':'1430', 'end':'1445', 'selected': false},
              {'name':'Pallbearer', 'start':'1500', 'end':'1600', 'selected': false},
              {'name':'Penance', 'start':'1630', 'end':'1730', 'selected': false},
              {'name':'Gravetemple', 'start':'1800', 'end':'1900', 'selected': false},
              {'name':'High on Fire', 'start':'1930', 'end':'2045', 'selected': false},
              {'name':'Primordial', 'start':'2115', 'end':'2245', 'selected': false},
              {'name':'The Psychadelic Warlords', 'start':'2315', 'end':'2450', 'selected': false}
            ],
            '2. Het Patronaat':[
              {'name':'The Black Heart Rebellion', 'start':'1430', 'end':'1530', 'selected': false},
              {'name':'The Atlas Moth', 'start':'1600', 'end':'1700', 'selected': false},
              {'name':'Royal Thunder', 'start':'1730', 'end':'1830', 'selected': false},
              {'name':'Lântlos', 'start':'2030', 'end':'2130', 'selected': false},
              {'name':'John Baizley', 'start':'1900', 'end':'2000', 'selected': false},
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
          },
          '2. Friday': {
            '1. mainStage':[
              {'name':'Dream Death', 'start':'1450', 'end':'1600', 'selected': false},
              {'name':'Sabbath Assembly', 'start':'1630', 'end':'1730', 'selected': false},
              {'name':'Uncle Acid and The Deadbeats', 'start':'1800', 'end':'1900', 'selected': false},
              {'name':'The Pretty Things', 'start':'1945', 'end':'2100', 'selected': false},
              {'name':'Electric Wizard', 'start':'2145', 'end':'2315', 'selected': false},
              {'name':'Psychic TV', 'start':'2345', 'end':'2515', 'selected': false},
            ],
            '2. Het Patronaat':[
              {'name':'Dread Sovereign', 'start':'1400', 'end':'1445', 'selected': false},
              {'name':'Kadavar', 'start':'1515', 'end':'1615', 'selected': false},
              {'name':'Witch Mountain', 'start':'1645', 'end':'1745', 'selected': false},
              {'name':'Hexvessel', 'start':'1815', 'end':'1915', 'selected': false},
              {'name':'Les Discrets', 'start':'1945', 'end':'2045', 'selected': false},
              {'name':'Eternal Tapestry', 'start':'2115', 'end':'2215', 'selected': false},
              {'name':'Goat', 'start':'2300', 'end':'2400', 'selected': false},
              {'name':'Amenra', 'start':'2430', 'end':'2530', 'selected': false},
            ],
            '3. Green Room':[
              {'name':'Tombstoned', 'start':'1600', 'end':'1645', 'selected': false},
              {'name':'Witchsorrow', 'start':'1730', 'end':'1830', 'selected': false},
              {'name':'Moss', 'start':'1915', 'end':'2015', 'selected': false},
              {'name':'Cough', 'start':'2045', 'end':'2145', 'selected': false},
              {'name':'Seremonia', 'start':'2230', 'end':'2315', 'selected': false},
              {'name':'Satan\'s Satyrs', 'start':'2400', 'end':'2500', 'selected': false},
            ],
            '4. Stage01':[
              {'name':'The Electric Grinhouse Cinema', 'start':'1400', 'end':'2530', 'selected': false},
            ]
          },
          '3. Saturday': {
            '1. mainStage':[
              {'name':'The Ocean', 'start':'1400', 'end':'1500', 'selected': false},
              {'name':'Alcest', 'start':'1530', 'end':'1640', 'selected': false},
              {'name':'Cult of Luna', 'start':'1710', 'end':'1820', 'selected': false},
              {'name':'High on Fire', 'start':'1850', 'end':'1950', 'selected': false},
              {'name':'Die Kreuzen', 'start':'2015', 'end':'2115', 'selected': false},
              {'name':'Godflesh', 'start':'2145', 'end':'2325', 'selected': false},
              {'name':'Endless Boogie', 'start':'2350', 'end':'2500', 'selected': false}
            ],
            '2. Het Patronaat':[
              {'name':'Outside The Great Circle', 'start':'1400', 'end':'1415', 'selected': false},
              {'name':'Black Magician', 'start':'1430', 'end':'1520', 'selected': false},
              {'name':'The Ruins of Beverast', 'start':'1550', 'end':'1700', 'selected': false},
              {'name':'Antisect', 'start':'1730', 'end':'1830', 'selected': false},
              {'name':'A Forest of Stars', 'start':'1900', 'end':'2010', 'selected': false},
              {'name':'Elder', 'start':'2040', 'end':'2140', 'selected': false},
              {'name':'Satan\'s Satyrs', 'start':'2210', 'end':'2300', 'selected': false},
              {'name':'Asphyx', 'start':'2330', 'end':'2450', 'selected': false},
            ],
            '3. Green Room':[
              {'name':'Monomyth', 'start':'1445', 'end':'1545', 'selected': false},
              {'name':'Camera', 'start':'1615', 'end':'1730', 'selected': false},
              {'name':'Victor Griffin\'s In-Graved', 'start':'1800', 'end':'1900', 'selected': false},
              {'name':'Jess and The Ancient Ones', 'start':'1930', 'end':'2030', 'selected': false},
              {'name':'Ash Borer', 'start':'2100', 'end':'2200', 'selected': false},
              {'name':'My Brother The Wins', 'start':'2230', 'end':'2330', 'selected': false},
              {'name':'Process of Guilt', 'start':'2400', 'end':'2500', 'selected': false}
            ],
            '4. Stage01':[
              {'name':'Fell Voices', 'start':'1415', 'end':'1515', 'selected': false},
              {'name':'Raketkanon', 'start':'1545', 'end':'1630', 'selected': false},
              {'name':'Wo Fat', 'start':'1700', 'end':'1800', 'selected': false},
              {'name':'Lo!', 'start':'1830', 'end':'1915', 'selected': false},
              {'name':'Teeth Of The Sea', 'start':'1945', 'end':'2100', 'selected': false},
              {'name':'Mr Peter Hayden', 'start':'2130', 'end':'2245', 'selected': false},
              {'name':'The Cosmic Dead', 'start':'2315', 'end':'2445', 'selected': false},
            ]
          }
        };

      localStorageService.add('shows', JSON.stringify($scope.shows));
    }

    $scope.save = function() {
      localStorageService.remove('shows');
      localStorageService.add('shows', JSON.stringify($scope.shows));
    };
  });
