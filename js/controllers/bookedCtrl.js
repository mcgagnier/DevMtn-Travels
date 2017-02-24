angular.module('devmtnTravel').controller('bookedCtrl', function($scope, mainSrv) {
    console.log('booked');

    if($stateParams.id === 'shoes') {
      $scope.productHeader = 'Shoes';
      $scope.products = productService.shoeData;
    }

    if ($stateParams.id === 'socks') {
      $scope.productHeader = 'Socks';
      $scope.products = productService.sockData;
    }

})
