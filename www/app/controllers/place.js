angular.module('filosofapp')

    .controller('PlaceCtrl', ['PLACES', 'SCENES', '$log', '$rootScope', '$scope', '$state', '$stateParams', '$ionicHistory', '$sce', function(PLACES, SCENES, $log, $rootScope, $scope, $state, $stateParams, $ionicHistory, $sce) {

        $ionicHistory.clearHistory();
        $ionicHistory.nextViewOptions({
            disableBack: true
        });

        $scope.currentPlace = PLACES[$stateParams.placeId];
        $scope.currentScene = SCENES[$stateParams.sceneId];

        $scope.goMap = function() {
            $state.go('map');
        };

        $scope.trustSrc = function(src) {
            return $sce.trustAsResourceUrl(src);
        }

    }]);
