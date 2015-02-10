'use strict';

angular.module('listingManagerApp')
  .controller('ManageQuantityCtrl', function ($scope, $state, $stateParams) {
  
    // this should at first be set to the current quantity or null.
    // disabled if 0. there should be a button for sending stock out.

    $scope.myData = $state.current.data.myData;

    for (var i = $scope.myData.length - 1; i >= 0; i--) {
      var item = $scope.myData[i];
      if (item.itemID == $stateParams.id) {
        $scope.item = item;
      }
    };

    $scope.newQuantity = 50;

    $scope.submit = function() {
      alert("the quantity is " + $scope.newQuantity + "!");
    };

    $scope.stockOut = function() {
      alert("the stock is out");
    };

  });
