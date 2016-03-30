angular.module('filosofapp')

    .controller('DialogCtrl', ['$log', '$rootScope', '$scope', '$state', function($log, $rootScope, $scope, $state) {

        $scope.dialogs = $scope.currentScene.dialogs;
        $scope.currentDialogId = $scope.currentScene.firstDialog;
        $scope.currentDialog = $scope.dialogs[$scope.currentDialogId];
        $scope.data = {
            choiceSelected: null
        };

        $scope.goNextDialog = function() {
            $scope.currentDialogId = $scope.currentDialog.nextDialog;
            $scope.currentDialog = $scope.dialogs[$scope.currentDialogId];
            $scope.data.choiceSelected = null;
        };

        $scope.goToChoise = function() {
            $scope.currentDialogId = $scope.data.choiceSelected;
            $scope.currentDialog = $scope.dialogs[$scope.currentDialogId];
            $scope.data.choiceSelected = null;
        };

        $scope.goScene = function() {
            if ($scope.currentDialog.nextScene.length > 0) {
                $state.go('place', { placeId: $scope.currentPlace.id, sceneId: $scope.currentDialog.nextScene });
            } else {
                $state.go('map');
            }
        };

    }]);
