// Register `mobileCarousel` component, along with its associated controller and template

angular.
  module('phonecatApp').
  component('mobileCarousel', {
    templateUrl:'mobile-carousel/mobile-carousel.template.html',
    controller: ['$http','$scope',
     function MobileListController($http,$scope) {
       var self = this;

       $http.get('json/phoneData.json').then(function(response) {
           self.mobiles = response.data;
           console.log(self.mobiles);
         });

         $scope.orderByMe = function(x) {

            $scope.myOrderBy = x;
        }
     }
   ]
  });
