(function () {
  'use strict';

  var shoppingList = [
    {
      name: "Oreos",
      quantity: "10",
      pricePerItem: 4.19
    },
    {
      name: "Chips Ahoy",
      quantity: "2",
      pricePerItem: 4.29
    },
    {
      name: "Fig Newtons",
      quantity: "1",
      pricePerItem: 3.99
    },
    {
      name: "Nutter Butters",
      quantity: "5",
      pricePerItem: 4.99
    }
  ];
  
  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService)
  .filter('threeDollarSigns', threeDollarSignsFilter);

 


  
  // ************ Controller 1 ************ //
  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var toBuy = this;

    // display grocery list
    toBuy.items = ShoppingListCheckOffService.getItems();

    // buy stuff - this should use the service to take item off to buy listboughtList
    toBuy.buyItem = function (itemIndex) {
      ShoppingListCheckOffService.buyItem(itemIndex);
    };
  
  }
  
  // ************ Controller 2 ************ //
  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService', '$scope', 'threeDollarSignsFilter'];
  function AlreadyBoughtController(ShoppingListCheckOffService, $scope, threeDollarSignsFilter) {
  
    var boughtList = this;
    
    boughtList.numberBoughtItems = true;

    //show bought items
    boughtList.items = ShoppingListCheckOffService.getBoughtItems();

  }

  function threeDollarSignsFilter() {
    return function (input) {
      input = input || "";
      input = '$$$' + input;
      return input;
    };
  }
  

  // ************** Service ************** //
  function ShoppingListCheckOffService() {
    var service = this;
  
    // List of shopping items
    var items = shoppingList;
    var boughtItems = [];
    var boughtItemTotal = 0;
  
    service.buyItem = function (itemIndex) {
      boughtItems.push(items[itemIndex]);
      items.splice(itemIndex, 1);
    };
  
    service.getItems = function () {
      return items;
    };
  
    service.getBoughtItems = function () {
      return boughtItems;
    };
  }
  
  })();
  