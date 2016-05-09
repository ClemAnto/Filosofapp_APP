angular.module('filosofapp')

    .controller('MapCtrl', function(PLACES, $log, $rootScope, $scope, $ionicPopup, $state, $ionicNavBarDelegate, $ionicHistory, $ionicScrollDelegate, Animation, Config) {
        
        $ionicNavBarDelegate.showBackButton(false);
        $scope.animation = null;
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
            if ($scope.checkPlaceLicense(placeId)) {
                $ionicScrollDelegate.$getByHandle('viewport').zoomTo(2, true);
                Animation.play("map-out", function() {
                    $state.go('place', { placeId: placeId, sceneId: PLACES[placeId].defaultScene });
                });

            } else {
                //alert("Questa sezione è disponibile nella versione completa.");
                var alertPopup = $ionicPopup.alert({
                    title: 'Questa è Filosofapp Lite!',
                    template: 'Contenuti disponibili nella versione completa dell\'app.',
                    okType: 'button-dark'
                });
            }
        };

        $scope.goCredits = function() {
            $state.go('credits');
        }

        $scope.checkPlaceLicense = function(id) {
            var licensedSections = Config.getLicensedSections();
            return licensedSections ? licensedSections[id] : true;
        }

        $scope.$on('$ionicView.beforeEnter', function() {
            var scrollview = $ionicScrollDelegate.$getByHandle('viewport').getScrollView();
            scrollview.options.animationDuration = 1000;
            var w = scrollview.options.getContentWidth();
            var h = scrollview.options.getContentHeight();
            var viewport = scrollview.__container;
            var vw = viewport.offsetWidth;
            var vh = viewport.offsetHeight;
            var cx = (w-vw)/2;
            var cy = (h-vh)/2 + 60;

            //$ionicScrollDelegate.$getByHandle('viewport').zoomBy(0.8);

            $ionicScrollDelegate.$getByHandle('viewport').scrollTo(cx,cy,false);
            $ionicScrollDelegate.$getByHandle('viewport').zoomTo(2, false);
            $ionicScrollDelegate.$getByHandle('viewport').zoomTo(1, true);
            
            
        });

    });
