angular.module('app').controller('produitctrl',['$scope',function ($scope) {
    /* mauvaise pratique */
    // $scope.ref='ABD-BCD';
    // $scope.prix=2.20;
    // $scope.nom='Beurret salé 5% de Bretagne';
    this.titre='Beurre BIO';
    this.ref='ABD-BCD';
    this.prix=2.20;
    this.desc='Beurre salé 5% de Bretagne';
    this.image='/img/beurre1.jpg'
}])