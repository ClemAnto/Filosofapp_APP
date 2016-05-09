angular.module('filosofapp')

    .controller('CreditsCtrl', function($scope, $state) {

    	$scope.goMap = function() {
            $state.go('map');
        };
    });
