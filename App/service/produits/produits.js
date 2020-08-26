(function() {
    'use strict';

    angular
        .module('app')
        .service('produitSrvc', Service);

    Service.$inject = ['REST_SRV_ADR','$http'];
    function Service(REST_SRV_ADR,$http) {
        var vm=this;
        this.produits=[{id:12,titre:'au depart du service', prix:-100,desc:'',image:''}];
        this.produit={};

        $http.get(REST_SRV_ADR+'/produits').then(function(response){
            //vm.produits=response.data;
            response.data.forEach(function(element){
                vm.produits.push(element);
            });
            console.log(vm.produits);
        });
    }
})();