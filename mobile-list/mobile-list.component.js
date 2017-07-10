// Register `mobileList` component, along with its associated controller and template
angular.
  module('phonecatApp').
  component('mobileList', {

    templateUrl:'mobile-list/mobile-list.template.html',
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

        $scope.gridView = function(){
            angular.element('.mobile-list').addClass('grid-view');
            angular.element('.snippet').css({'font-size':'16px'});
        }
        $scope.listView = function(){
            angular.element('.mobile-list').removeClass('grid-view');
            angular.element('.snippet').css({'font-size':'21px'});
        }

     }
   ]
  });
