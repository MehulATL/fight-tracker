'use strict';

angular.module('fightTrackerApp')
  .controller('MainCtrl', function ($scope) {
    //$scope.name = 'MainCtrl';
    // $scope.awesomeThings = [
    //   'HTML5 Boilerplate',
    //   'AngularJS',
    //   'Karma'
    // ];
    $scope.map = {
      center: {
        lat: 37.7833,
        lng: 122.4167,
        zoom: 15
      }
    };
  })

.controller('CenterController', [ '$scope', function($scope) {
  angular.extend($scope, {
    center: {
      lat: 37.76,
      lng: -122.45,
      zoom: 12
    },
    defaults: {
      scrollWheelZoom: false
    }
  });
}]);