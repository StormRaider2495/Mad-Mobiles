'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('phonecatApp').
  component('mobileDetail', {
    // template: 'TBD: Detail view for <span>{{$ctrl.mobileId}}</span>',
    templateUrl: 'mobile-detail/mobile-detail.template.html',
    controller: ['$http','$routeParams',
      function PhoneDetailController($http,$routeParams) {
        var self = this;
        self.mobileId = $routeParams.mobileId;
        $http.get('mobiles/'+self.mobileId+'.json').then(function(response) {
            self.mobile = response.data;
          });
      }
    ]
  });
