(function(){
    'use strict';
  
    angular.module('NarrowItDownApp',[])
    .controller('NarrowItDownController',NarrowItDownController)
    .service('MenuSearchService',MenuSearchService)
    .directive('foundItems',foundItems);
  
    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController (MenuSearchService){
      var menu = this;
      menu.empty = true;
  
      menu.removeItems = function (index) {
        menu.found.splice(index,1);
      };
  
      menu.search = function () {
        if (menu.searchTerm) {
          var promise = MenuSearchService.getMatchedMenuItems();
          promise
          .then(function (response){
            
            menu.items = response.data;
            
            menu.found = [];
            for(var key in menu.items) {
              for(var c=1; c<menu.items[key].menu_items.length; c++) {
                var itemDescription = menu.items[key].menu_items[c].description.toLowerCase();
                
                if (itemDescription.indexOf(menu.searchTerm.toLowerCase()) != -1) {
                  menu.found.push(menu.items[key].menu_items[c]);
                }
              }
            }
            
            if (menu.found.length) {
              menu.empty = false; 

            } 
            else {
              menu.empty = true;
            }
          })
          .catch(function (error) {
            console.log("Something went terribly wrong.");
          });
        }
        else {
          menu.found = [];
          menu.empty = true;
        }
      };
    };
  
    MenuSearchService.$inject = ['$http'];
    function MenuSearchService($http){
      var service = this;
  
      service.getMatchedMenuItems = function(){
        var response = $http({
          method : 'GET',
          url : "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json"
        });
        return response;
      };
    };
    
    function foundItems (){
      var ddo = {
        restrict: 'E',
        templateUrl : 'foundItems.html',
        scope : {
          foundItem : '=',
          onRemove : '&',
          empty : '='
        },
        controller : 'NarrowItDownController',
        controllerAs : 'menu',
        bindToController : true
      };
      return ddo;
    };
  
  })();
  