(function () {
    'use strict';
    
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);
    
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
    
        $scope.color = "black";
      
       $scope.checkTooMuch = function () {
        
        if (!$scope.list) {
            $scope.color = "red";
            $scope.message = "Please enter data first"
        }
        else {
            var commaList = $scope.list.split(',');
            // filter boolean gets rid of zero length item in count
            if (commaList.filter(Boolean).length <= 3) {
                $scope.color = "green";
                $scope.message = "Enjoy!"
            }
            else {
                $scope.color = "green";
                $scope.message = "Too Much!"
            }
        }
        
      };
      
    }
    
    })();