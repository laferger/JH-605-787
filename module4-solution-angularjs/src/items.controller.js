(function() {
    'use strict';

    angular.module('MenuApp')
    .controller('itemsController', itemsController);

    itemsController.$inject = ['$stateParams', 'items'];

    function itemsController($stateParams, items) {
        var ctrl = this;
        ctrl.items = items;
        ctrl.categoryName = $stateParams.categoryName;
    }
})();
