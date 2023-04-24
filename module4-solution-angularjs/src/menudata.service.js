(function() {
    'use strict';

    angular.module('data')
    .service('MenuDataService', MenuDataService);

    MenuDataService.$inject = ['$http'];

    function MenuDataService($http) {
        var service = this;
        service.list = []
        service.items = []

        /* syntax for return $http in example 25 */
        service.getAllCategories = function() {
            return $http({
                method: "GET",
                url: ('https://coursera-jhu-default-rtdb.firebaseio.com/categories.json'),
                cache: true
            }).then(
                function(response) {
                   service.list = response.data;
                   return service.list;
            });
        };

        service.getItemsForCategory = function(categoryShortName) {
            return $http({
                method: "GET",
                url: ('https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/' + categoryShortName + '.json')
                
            }).then(function(response) {
                service.items = response.data.menu_items;
                return service.items
            });
        };
    }
})();
