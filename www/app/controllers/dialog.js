angular.module('filosofapp')

<<<<<<< HEAD
	.controller('DialogCtrl', function($log, $rootScope, $scope, $state, $timeout, Animation, DEFAULT, SETTINGS) {
		
		$scope.animation = null;
		$scope.dialogs = $scope.currentScene.dialogs;
		$scope.currentDialogId = $scope.currentScene.firstDialog;
		$scope.prevDialog = null;
		$scope.currentDialog = $scope.dialogs[$scope.currentDialogId];

		$scope.data = {
			choiceSelected: null
		};

		$scope.goNextPage = function() {
			if (Animation.isPlaying()) return;
		
			switch($scope.currentDialog.exitType || DEFAULT.exitType) {
				case 'dialog': $scope.goNextDialog(); break;
				case 'scene': $scope.goScene(); break;
				default:;
			}
			
		}

		$scope.goNextDialog = function() {
			if ($rootScope.animation) return;

			$scope.prevDialog = $scope.currentDialog;
			var nextDialog = $scope.dialogs[$scope.currentDialog.nextDialog];
			var talkerChanged = $scope.currentDialog.positionClass != nextDialog.positionClass;
			
			
			$scope.checkDialogLength(nextDialog, $scope.currentDialog.nextDialog);


			Animation.play(talkerChanged ? 'dialog-out' : 'dialog-clean', function() {
					$scope.currentDialog = nextDialog;
					$scope.data.choiceSelected = null;
			});
		};

		

		$scope.goToDialog = function(dialogId) {
			if ($rootScope.animation && !$scope.dialogs[dialogId]) return;

			$scope.prevDialog = $scope.currentDialog;
			var nextDialog = $scope.dialogs[dialogId];
			var talkerChanged = $scope.currentDialog.positionClass != nextDialog.positionClass;
			
			$scope.checkDialogLength(nextDialog, $scope.currentDialog.nextDialog);
			
			Animation.play(talkerChanged ? 'dialog-out' : 'dialog-clean', function() {
					$scope.currentDialog = nextDialog;
					$scope.data.choiceSelected = null;
			});
		};

		$scope.goPrevPage = function() {
			if ($rootScope.animation && $scope.prevDialog) return;
			var talkerChanged = $scope.currentDialog.positionClass != $scope.prevDialog.positionClass;     
			Animation.play(talkerChanged ? 'dialog-out' : 'dialog-clean', function() {
					$scope.currentDialog = $scope.prevDialog;
					$scope.prevDialog = null;
					$scope.data.choiceSelected = null;
			});
			
		};


		$scope.goToChoice = function() {
			Animation.play('dialog-out', function () {
				$scope.currentDialogId = $scope.data.choiceSelected;
				$scope.currentDialog = $scope.dialogs[$scope.currentDialogId];
				$scope.data.choiceSelected = null;
			})
			
		};


		$scope.goScene = function() {
			
			if ($scope.currentDialog.nextScene && $scope.currentDialog.nextScene.length > 0) {
				$state.go('place', { placeId: $scope.currentPlace.id, sceneId: $scope.currentDialog.nextScene });
			} else {
				$state.go('map');
			}
 
		};


		$scope.checkDialogLength = function(dialog, dialogId, index) {
			if (dialog.text && dialog.text.length > SETTINGS.maxDialogChars) $scope.splitDialog(dialog, dialogId, index);
		};


		$scope.splitDialog = function(dialog, dialogKey, index) {

			index = index || 1;
            var clone = angular.copy(dialog);

            var splitIndex = dialog.text.indexOf(" ", SETTINGS.maxDialogChars);
            if (splitIndex > -1 && splitIndex < dialog.text.length-1) {
            	var cloneId = dialogKey + "_" + index;
            	console.log("dialog.js::splitDialog - splitted '" + dialogKey + "' in '"+cloneId+"' ");
                dialog.text = dialog.text.substring(0, splitIndex).replace(/[,.]$/g,"") + "...";
                dialog.nextDialog = cloneId;
                delete dialog.exitType;
                delete dialog.nextScene;
                
                clone.id = cloneId;
                clone.text = "..." + clone.text.substring(splitIndex+1);
                
                $scope.dialogs[cloneId] = clone;
                $scope.checkDialogLength(clone, dialogKey, index+1);
                
            }
        }

        // RUN
        $scope.checkDialogLength($scope.currentDialog, $scope.currentDialogId);

	});
=======
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
>>>>>>> origin/master
