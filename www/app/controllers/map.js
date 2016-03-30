angular.module('filosofapp')

    .controller('MapCtrl', ['PLACES', '$log', '$rootScope', '$scope', '$state', '$ionicHistory', function(PLACES, $log, $rootScope, $scope, $state, $ionicHistory) {

        $ionicHistory.clearHistory();
        $ionicHistory.nextViewOptions({
            disableBack: true
        });

        $scope.places = [];
        for (var place in PLACES) {
            if (PLACES.hasOwnProperty(place) && PLACES[place].marker.length > 0) {
                $scope.places.push({ id: place, marker: PLACES[place].marker });
            }
        }

        $scope.goPlace = function(placeId) {
            $state.go('place', { placeId: placeId, sceneId: PLACES[placeId].defaultScene });
        };

    }]);
