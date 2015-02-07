'use strict';

angular.module('listingManagerApp')
  .controller('ManageCtrl', function ($scope) {
    $scope.message = 'Hello';

    $scope.mySelections = [];

    $scope.myData = [
    {
        "itemNumber": 5037087,
        "title": "Consequat culpa magna ad et officia labore aute dolor proident.",
        "qtyRemaining": 180,
        "qtySold": 180,
        "dateLastSold": "Mon Feb 12 1973 05:28:27 GMT-0500 (Eastern Standard Time)",
        "name": "Wooten"
      },
      {
        "itemNumber": 5174785,
        "title": "Excepteur ullamco irure sit ad.",
        "qtyRemaining": 277,
        "qtySold": 226,
        "dateLastSold": "Sat Jul 01 1978 03:46:35 GMT-0400 (Eastern Daylight Time)",
        "name": "Stein"
      },
      {
        "itemNumber": 4776505,
        "title": "Pariatur magna cupidatat deserunt elit.",
        "qtyRemaining": 209,
        "qtySold": 271,
        "dateLastSold": "Sat Aug 02 1975 12:10:37 GMT-0400 (Eastern Daylight Time)",
        "name": "Chan"
      },
      {
        "itemNumber": 3626486,
        "title": "Aliqua nulla elit tempor amet laboris mollit pariatur aliquip esse consectetur dolor est ad.",
        "qtyRemaining": 290,
        "qtySold": 105,
        "dateLastSold": "Mon Aug 22 1983 19:13:44 GMT-0400 (Eastern Daylight Time)",
        "name": "Donaldson"
      },
      {
        "itemNumber": 5027060,
        "title": "Sunt tempor ea culpa Lorem ex enim deserunt qui sint.",
        "qtyRemaining": 143,
        "qtySold": 118,
        "dateLastSold": "Wed Sep 11 2013 14:53:02 GMT-0400 (Eastern Daylight Time)",
        "name": "Henson"
      },
      {
        "itemNumber": 2692068,
        "title": "Consectetur aliquip exercitation laboris nostrud occaecat adipisicing adipisicing non aliquip non cillum ea.",
        "qtyRemaining": 168,
        "qtySold": 171,
        "dateLastSold": "Sat Feb 16 2008 08:01:21 GMT-0500 (Eastern Standard Time)",
        "name": "Callahan"
      }
                 ];


        $scope.gridOptions = { 
        data: 'myData',
        multiSelect: false,
        selectedItems: $scope.mySelections,

        };       

      $scope.master = {};

      $scope.update = function(user) {
        $scope.master = angular.copy(user);
      };

      $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
      };

      $scope.reset();
 
  });
