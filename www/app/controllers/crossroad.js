angular.module('filosofapp')

    .controller('CrossroadCtrl', ['$log', '$rootScope', '$scope', '$state', function($log, $rootScope, $scope, $state) {

        $scope.goScene = function(scene) {
            $state.go('place', { placeId: $scope.currentPlace.id, sceneId: scene });
        };

    }]);
