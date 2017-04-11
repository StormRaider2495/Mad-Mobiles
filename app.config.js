'use strict';

angular.
  module('phonecatApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/home' , {
          template: '<mobile-carousel></mobile-carousel>'
        }).
        when('/mobiles', {
          template: '<mobile-list></mobile-list>'
        }).
        when('/mobiles/:mobileId', {
          template: '<mobile-detail></mobile-detail>'
        }).
        otherwise('/home');
    }
  ]);
