(function () {
  'use strict';

  var shoppingList = [
    {
      name: "Milk",
      quantity: "2"
    },
    {
      name: "Donuts",
      quantity: "200"
    },
    {
      name: "Cookies",
      quantity: "300"
    },
    {
      name: "Chocolate",
      quantity: "5"
    }
  ];
  
  angular.module('ShoppingListCheckOff', [])
  .controller('ShoppingListAddController', ShoppingListAddController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListService', ShoppingListService);
  
  ShoppingListAddController.$inject = ['ShoppingListService'];
  function ShoppingListAddController(ShoppingListService) {
    var itemAdder = this;
  
    itemAdder.itemName = "";
    itemAdder.itemQuantity = "";
  
    itemAdder.addItem = function () {
      ShoppingListService.addItem(itemAdder.itemName, itemAdder.itemQuantity);
    }
  }
  
  
  AlreadyBoughtController.$inject = ['ShoppingListService'];
  function AlreadyBoughtController(ShoppingListService) {
    var showList = this;
  
    showList.items = ShoppingListService.getItems();
  
    showList.buyItem = function (itemIndex) {
      ShoppingListService.buyItem(itemIndex);
    };
  }
  
  
  function ShoppingListService() {
    var service = this;
  
    // List of shopping items
    var items = shoppingList;
  
    // service.addItem = function (itemName, quantity) {
    //   var item = {
    //     name: itemName,
    //     quantity: quantity
    //   };
    //   items.push(item);
    // };
  
    service.buyItem = function (itemIndex) {
      items.splice(itemIndex, 1);
    };
  
    service.getItems = function () {
      return items;
    };
  }
  
  })();
  