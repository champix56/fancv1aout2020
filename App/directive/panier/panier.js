(function() {
    'use strict';

    angular
        .module('app')
        .directive('panier', Directive);

    
    function Directive() {
        
        var directive = {
            restrict: 'E',
            templateUrl:'/App/directive/panier/panier.html'
        };
        return directive;        
    }
})();