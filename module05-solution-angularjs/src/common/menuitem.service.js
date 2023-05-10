(function () {
"use strict";

angular.module('common')
.service('MenuItemService', MenuItemService);


MenuItemService.$inject = ['$http', 'ApiPath'];
function MenuItemService($http, ApiPath) {
  var service = this;

  service.getFavoriteMenuItem = function (itemNumber) {
    //alert(ApiPath + '/menu_items/' + itemNumber.substring(0, 1) + '/menu_items/' + itemNumber.substring(1, itemNumber.length) + '.json');
    return $http.get(ApiPath + '/menu_items/' + itemNumber.substring(0, 1) + '/menu_items/' + itemNumber.substring(1, 2) + '.json')
    //return $http.get(ApiPath + '/menu_items/A/menu_items/1.json')
    .then(function (response) {
      return response.data;
    });
  };

}

})();
