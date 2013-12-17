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
        latitude: 45,
        longitude: -73
      },
      zoom: 15
    };

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      $scope.map.center = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      };
    });
  }

  });
