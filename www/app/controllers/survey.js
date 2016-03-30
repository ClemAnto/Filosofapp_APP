angular.module('filosofapp')

    .controller('SurveyCtrl', ['$log', '$rootScope', '$scope', '$state', function($log, $rootScope, $scope, $state) {

        $scope.showingResult = false;
        $scope.questions = $scope.currentScene.questions;
        $scope.currentQuestionId = $scope.currentScene.firstQuestion;
        $scope.currentQuestion = $scope.questions[$scope.currentQuestionId];
        $scope.data = {
            answerSelected: null
        };

        $scope.showResult = function() {

            if ($scope.data.answerSelected) {

                $scope.showingResult = true;
            
            } 
        };


        $scope.goNextQuestion = function() {
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
