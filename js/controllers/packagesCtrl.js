angular.module('devmtnTravel').controller('packagesCtrl', function($scope, mainSrv) {
    // console.log('packages')
    $scope.travelData = mainSrv.travelInfo;

})
