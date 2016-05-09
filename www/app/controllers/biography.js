angular.module('filosofapp')

    .controller('BiographyCtrl', function($log, $rootScope, $scope, $state, Animation, SETTINGS) {
        
        var pages = $scope.currentScene.pages;
        var currentPageIdx = 0;
        $scope.currentPage = pages[currentPageIdx];

        $scope.goNextPage = function() {
            if ($rootScope.animation) return;

            currentPageIdx++;
            if (currentPageIdx >= pages.length) {
                if ($scope.currentScene.nextScene.length > 0) {
                    $state.go('place', { placeId: $scope.currentPlace.id, sceneId: $scope.currentScene.nextScene });
                } else {
                    $state.go('map');
                }
                
            } else {
                
                var nextPage = pages[currentPageIdx];
                var talkerChanged = $scope.currentPage.positionClass != nextPage.positionClass;

                $scope.checkPageLength(nextPage);
 
                Animation.play(talkerChanged ? 'dialog-out' : 'dialog-clean', function () {
                    $scope.currentPage = nextPage;
                });
                
            }
        };


        $scope.goPrevPage = function() {
            if (Animation.isPlaying() || currentPageIdx < 1) return;

            currentPageIdx--;
            
            var prevPage = pages[currentPageIdx];
            var talkerChanged = $scope.currentPage.positionClass != prevPage.positionClass;
            
            Animation.play(talkerChanged ? 'dialog-out' : 'dialog-clean', function () {
                $scope.currentPage = prevPage;
            });
                
            
        };

        $scope.splitPage = function(page, index) {           
            index = index || currentPageIdx;
            console.log("bography.js::splitPage - splitted page at: " + index );
            var clone = angular.copy(page);
            var splitIndex = page.text.indexOf(" ", SETTINGS.maxDialogChars);
            if (splitIndex > -1 && splitIndex < page.text.length-1) {
                page.text = page.text.substring(0, splitIndex).replace(/[,.]$/g,"") + "...";
                clone.text = "..." + clone.text.substring(splitIndex+1);
                pages.splice(index+1, 0, clone)
                $scope.checkPageLength(clone, index+1);
            }
        }

        $scope.checkPageLength = function(page, index) {
            if (page.text && page.text.length > SETTINGS.maxDialogChars) $scope.splitPage(page, index);
        }

        // RUN
        $scope.checkPageLength($scope.currentPage);

    });
