angular.module('filosofapp')

    .controller('StoryCtrl', ['$log', '$rootScope', '$scope', '$state', function($log, $rootScope, $scope, $state) {

        $scope.pages = $scope.currentScene.pages;
        $scope.currentPageIdx = 0;
        $scope.currentPage = $scope.pages[$scope.currentPageIdx];

        $scope.goNextPage = function() {
            $scope.currentPageIdx++;
            if ($scope.currentPageIdx >= $scope.pages.length) {
                if ($scope.currentScene.nextScene.length > 0) {
                    $state.go('place', { placeId: $scope.currentPlace.id, sceneId: $scope.currentScene.nextScene });
                } else {
                    $state.go('map');
                }
            } else {
                $scope.currentPage = $scope.pages[$scope.currentPageIdx];
            }
        };

    }]);
