(function() {
    'use strict';

    angular.module('MenuApp').controller('categoriesController', categoriesController);

    categoriesController.$inject = ['categories'];

    function categoriesController(listCategories) {
        var ctrl = this;
        ctrl.categories = listCategories;
    }
})();
