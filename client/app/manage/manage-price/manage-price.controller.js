'use strict';

angular.module('listingManagerApp')
  .controller('ManagePriceCtrl', function ($scope, $state, $stateParams) {
  
    $scope.myData = $state.current.data.myData;

    for (var i = $scope.myData.length - 1; i >= 0; i--) {
      var item = $scope.myData[i];
      if (item.itemID == $stateParams.id) {
        $scope.item = item;
      }
    };

    $scope.newPrice = "15.00";
  });
