'use strict';

angular.module('listingManagerApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('manage', {
        url: '/manage',
        templateUrl: 'app/manage/manage.html',
        controller: 'ManageCtrl',
        data: {
          authenticate: true
        }
      })
      .state('manage.price', {
        // make default id
        url: '/price/:id',
        templateUrl: 'app/manage/manage-price/manage-price.html',
        controller: 'ManagePriceCtrl',
      })
      .state('manage.quantity', {
        url: '/quantity/:id',
        templateUrl: 'app/manage/manage-quantity/manage-quantity.html',
        controller: 'ManageQuantityCtrl',
      });
  });