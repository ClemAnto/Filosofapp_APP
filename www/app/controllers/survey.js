angular.module('filosofapp')

<<<<<<< HEAD
    .controller('SurveyCtrl', function($log, $rootScope, $scope, $state, Animation) {
=======
    .controller('SurveyCtrl', ['$log', '$rootScope', '$scope', '$state', function($log, $rootScope, $scope, $state) {
>>>>>>> origin/master

        $scope.showingResult = false;
        $scope.questions = $scope.currentScene.questions;
        $scope.currentQuestionId = $scope.currentScene.firstQuestion;
        $scope.currentQuestion = $scope.questions[$scope.currentQuestionId];
        $scope.data = {
            answerSelected: null
        };

<<<<<<< HEAD
        $scope.goNextPage = function() {
            if ($scope.showingResult) $scope.goNextQuestion();
        }


        $scope.showResult = function() {

            if ($scope.data.answerSelected) {
                $scope.showingResult = true;
=======
        $scope.showResult = function() {

            if ($scope.data.answerSelected) {

                $scope.showingResult = true;
            
>>>>>>> origin/master
            } 
        };


        $scope.goNextQuestion = function() {
<<<<<<< HEAD
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
=======
            if ($scope.data.answerSelected.nextQuestion.length == 0) {
                $scope.showingResult = false;
                $state.go('place', { placeId: $scope.currentPlace.id, sceneId: $scope.currentScene.nextScene });
            
            } else {
                $scope.showingResult = false;
                $scope.currentQuestionId = $scope.data.answerSelected.nextQuestion;
                $scope.currentQuestion = $scope.questions[$scope.currentQuestionId];
                $scope.data.answerSelected = null;
            }
        };

    }]);
>>>>>>> origin/master
