(function () {
    angular.module('app')
        .controller('produitsCtrl', ProduitsCtrl);

    ProduitsCtrl.$inject = ['produitSrvc','$scope'];

    function ProduitsCtrl(produitSrvc,$scope) {
        var vm=this;
        this.produits = produitSrvc.produits;
    }
})();