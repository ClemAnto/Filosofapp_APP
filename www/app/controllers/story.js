angular.module('filosofapp')

<<<<<<< HEAD
    .controller('StoryCtrl', function($log, $rootScope, $scope, $state, $ionicScrollDelegate, Animation) {
=======
    .controller('StoryCtrl', ['$log', '$rootScope', '$scope', '$state', function($log, $rootScope, $scope, $state) {
>>>>>>> origin/master

        $scope.pages = $scope.currentScene.pages;
        $scope.currentPageIdx = 0;
        $scope.currentPage = $scope.pages[$scope.currentPageIdx];

        $scope.goNextPage = function() {
<<<<<<< HEAD
            if (Animation.isPlaying()) return;

=======
>>>>>>> origin/master
            $scope.currentPageIdx++;
            if ($scope.currentPageIdx >= $scope.pages.length) {
                if ($scope.currentScene.nextScene.length > 0) {
                    $state.go('place', { placeId: $scope.currentPlace.id, sceneId: $scope.currentScene.nextScene });
                } else {
                    $state.go('map');
                }
            } else {
<<<<<<< HEAD

                Animation.play('dialog-out', function() {
                    $ionicScrollDelegate.scrollTop();
                    $scope.currentPage = $scope.pages[$scope.currentPageIdx];
                }, 500, 1);
            }
        };

        $scope.goPrevPage = function() {
            if ($scope.currentPageIdx < 1 || Animation.isPlaying()) return;

            $scope.currentPageIdx--;
            Animation.play('dialog-back', function() {
                $ionicScrollDelegate.scrollTop();
                $scope.currentPage = $scope.pages[$scope.currentPageIdx];
            }, 500, 1);
     
        };

    });
=======
                $scope.currentPage = $scope.pages[$scope.currentPageIdx];
            }
        };

    }]);
>>>>>>> origin/master
