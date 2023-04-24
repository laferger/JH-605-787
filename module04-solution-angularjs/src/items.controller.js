(function() {
    'use strict';

    angular.module('MenuApp').controller('itemsController', itemsController);

    itemsController.$inject = ['$stateParams', 'MenuDataService', 'items'];

    function itemsController($stateParams, MenuDataService, items) {
        var ctrl = this;
        ctrl.items = items;
        ctrl.categoryName = $stateParams.categoryName;
    }
})();
