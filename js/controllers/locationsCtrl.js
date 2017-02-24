angular.module('devmtnTravel').controller('locationsCtrl', function($scope, mainSrv) {
    console.log(mainSrv.travelData)
    $scope.travelData = mainSrv.travelInfo;

})
