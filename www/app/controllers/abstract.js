angular.module('filosofapp')

    .controller('AbstractCtrl', ['$log', '$rootScope', '$scope', '$state', function($log, $rootScope, $scope, $state) {

        $scope.goNextScene = function() {
            if ($scope.currentScene.nextScene.length > 0) {
                $state.go('place', { placeId: $scope.currentPlace.id, sceneId: $scope.currentScene.nextScene });
            } else {
                $state.go('map');
            }
        };

    }]);
