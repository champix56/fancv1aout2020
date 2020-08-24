(function() {
    'use strict';

    angular
        .module('moduleNavBar',[])
        .directive('navBar', Directive);

    // Directive.$inject = ['dependency1'];
    function Directive() {
        var directive = {
            // bindToController: true,
            // controller: function  () {
            //     //contenu du controller de la diretive
            // },
            // controllerAs: 'vm',
            restrict: 'EAC',
            templateUrl:'/App/directive/navbar/navbar.html'
            // template:'<div> Voici Ma directive</div>'
            // scope: {title:'Mon 1er site angularjs'}
        };
        return directive;
    } 
})();