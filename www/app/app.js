angular.module('filosofapp', ['ionic'])

<<<<<<< HEAD
    .run(function($ionicPlatform, $rootScope, Config) {
        
        $rootScope.license = Config.getLicense();

        $ionicPlatform.ready(function() {

            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
              cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }

            if (window.StatusBar) {
              StatusBar.styleDefault();
            }


        });
    
        
    })



    .config(function(SETTINGS, $logProvider, $compileProvider) {
        $logProvider.debugEnabled(SETTINGS.debugEnabled);
        $compileProvider.debugInfoEnabled(SETTINGS.debugEnabled);
    })



    .config(function($ionicConfigProvider) {
        //Ionic latest version (1.7.14) pinch zoom is not working -> You can disable native scroll view 
        $ionicConfigProvider.scrolling.jsScrolling(true);
    })



    .config(function($stateProvider, $urlRouterProvider) {

=======
    .run(['$ionicPlatform', function($ionicPlatform) {
      $ionicPlatform.ready(function() {

        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }

        if (window.StatusBar) {
          StatusBar.styleDefault();
        }

      });
    }])

    .config(['SETTINGS', '$logProvider', '$compileProvider', function(SETTINGS, $logProvider, $compileProvider) {
        $logProvider.debugEnabled(SETTINGS.debugEnabled);

        $compileProvider.debugInfoEnabled(SETTINGS.debugEnabled);
    }])

    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider)
    {
>>>>>>> origin/master
        $stateProvider

            .state('map', {
                cache: false,
                url: '/map',
                templateUrl: 'app/templates/map.html',
                controller: 'MapCtrl'
            })

<<<<<<< HEAD
            .state('credits', {
                url: '/credits',
                templateUrl: 'app/templates/credits.html',
                controller: 'CreditsCtrl'
            })

=======
>>>>>>> origin/master
            .state('place', {
                cache: false,
                url: '/place/:placeId/:sceneId',
                templateUrl: 'app/templates/place.html',
                controller: 'PlaceCtrl'
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/map');

<<<<<<< HEAD
    });
=======
    }]);
>>>>>>> origin/master
