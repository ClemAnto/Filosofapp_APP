angular.module('filosofapp')

    .controller('SurveyCtrl', function($log, $rootScope, $scope, $state, Animation) {

        $scope.showingResult = false;
        $scope.questions = $scope.currentScene.questions;
        $scope.currentQuestionId = $scope.currentScene.firstQuestion;
        $scope.currentQuestion = $scope.questions[$scope.currentQuestionId];
        $scope.data = {
            answerSelected: null
        };

        $scope.goNextPage = function() {
            if ($scope.showingResult) $scope.goNextQuestion();
        }


        $scope.showResult = function() {

            if ($scope.data.answerSelected) {
                $scope.showingResult = true;
            } 
        };


        $scope.goNextQuestion = function() {
            if (Animation.isPlaying()) return;

            Animation.play("dialog-out", function() {
                
                $scope.showingResult = false;
              
                if ($scope.data.answerSelected.nextQuestion.length == 0) {
                    
                    $state.go('place', { placeId: $scope.currentPlace.id, sceneId: $scope.currentScene.nextScene });
                
                } else {
                    
                    $scope.currentQuestionId = $scope.data.answerSelected.nextQuestion;
                    $scope.currentQuestion = $scope.questions[$scope.currentQuestionId];
                    $scope.data.answerSelected = null;
                }
            });
        };

    });
