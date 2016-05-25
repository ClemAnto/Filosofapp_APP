angular.module('filosofapp')
<<<<<<< HEAD
    
    .filter('unsafe', function($sce) {
        return function(val) {
            return $sce.trustAsHtml(val);
        };
    })

    .factory('Animation', function($rootScope, $timeout, $document) {
        $rootScope.animation = null;

        return {
            play: function(animationName, onComplete, delay, delayReset) {
                $rootScope.animation = animationName + " ani-started";
                console.log("ANI: " + $rootScope.animation);
                $timeout(function () {
                    if (onComplete) onComplete();
                    if ($rootScope.animation) $rootScope.animation = $rootScope.animation.replace(" ani-started","") + " ani-completed";
                    console.log("ANI: " + $rootScope.animation);
                    
                    //FORCE IOS VIEW REFRESH
                    $document[0].body.style.display = 'inline';
                    $timeout(function () { $document[0].body.style.display = ''; }, 1);

                    $timeout(function () { $rootScope.animation = null; console.log("ANI: " + $rootScope.animation);}, delayReset || $rootScope.DIALOG_DELAY);
                    
                }, delay || 1000);
            },

            isPlaying: function() {
                return $rootScope.animation != null;
            }
        }
    })

    .factory('$localstorage', function($window) {
=======

    .filter('unsafe', ['$sce', function($sce) {
        return function(val) {
            return $sce.trustAsHtml(val);
        };
    }])

    .factory('$localstorage', ['$window', function($window) {
>>>>>>> origin/master
        return {
            set: function(key, value)
            {
                $window.localStorage[key] = value;
            },
            get: function(key, defaultValue)
            {
                return $window.localStorage[key] || defaultValue;
            },
            setObject: function(key, value)
            {
                $window.localStorage[key] = JSON.stringify(value);
            },
            getObject: function(key)
            {
                return JSON.parse($window.localStorage[key] || null); // JSON.parse(null) = null
            }
        }
<<<<<<< HEAD
    })

    .factory('Config', function(SETTINGS, $rootScope, $localstorage) {
=======
    }])

    .factory('Config', ['SETTINGS', '$rootScope', '$localstorage', function(SETTINGS, $rootScope, $localstorage) {
>>>>>>> origin/master

        var defaultUserConfig = function() {
            return {
                language: 'it',
                enable_push: false // Enable push notifications
            };
        };

        var userConfig = $localstorage.getObject('userConfig');
        if (userConfig == null) {
            userConfig = defaultUserConfig();
            $localstorage.setObject('userConfig', userConfig);
        }

        var deviceConfig = {
            onDevice: false,
            networkOnline: true
        };

        return {
<<<<<<< HEAD

            getLicense: function() {
                return 'demo-version'; //full-version
            },

            getLicensedSections: function(license) {
                license = license || this.getLicense();
                return license == 'demo-version' ? {'aidos':true} : null;
            },

            getDeviceConfig: function(property) {
                return deviceConfig.hasOwnProperty(property) ? deviceConfig[property] : '';
            },

=======
            getDeviceConfig: function(property) {
                return deviceConfig.hasOwnProperty(property) ? deviceConfig[property] : '';
            },
>>>>>>> origin/master
            setDeviceConfig: function(property, value) {
                if ((typeof(value) !== 'undefined') && (value !== null)) {
                    if (deviceConfig.hasOwnProperty(property)) {
                        deviceConfig[property] = value;
                        return true;
                    }
                }
                return false;
            },
<<<<<<< HEAD

=======
>>>>>>> origin/master
            checkNetworkStatus: function(fromNetworkError) {
                var currentNetworkOnline = deviceConfig.networkOnline;
                if (deviceConfig.onDevice) {
                    // On device
                    if ((typeof navigator.connection !== 'undefined') && (navigator.connection !== null)) {
                        var networkState = navigator.connection.type;
                        deviceConfig.networkOnline = networkState !== CONNECTION.UNKNOWN && networkState !== CONNECTION.NONE;
                    }
                } else {
                    // In browser
                    if (fromNetworkError === true) deviceConfig.networkOnline = false;
                }
                if ((currentNetworkOnline) && (!deviceConfig.networkOnline)) {
                    $rootScope.$broadcast('network.alert');
                }
            },
<<<<<<< HEAD

            getUserConfig: function(property) {
                return userConfig.hasOwnProperty(property) ? userConfig[property] : '';
            },

=======
            getUserConfig: function(property) {
                return userConfig.hasOwnProperty(property) ? userConfig[property] : '';
            },
>>>>>>> origin/master
            setUserConfig: function(property, value, save) {
                save = save || false;
                if ((typeof(value) !== 'undefined') && (value !== null)) { // is set
                    if (userConfig.hasOwnProperty(property)) {
                        userConfig[property] = value;
                        if (save) {
                            var currentUserConfig = $localstorage.getObject('userConfig');
                            currentUserConfig[property] = value;
                            $localstorage.setObject('userConfig', currentUserConfig);
                        }
                        return true;
                    }
                }
                return false;
            },
<<<<<<< HEAD

            unsaveUserConfig: function() {
                $localstorage.setObject('userConfig', defaultUserConfig());
            },

=======
            unsaveUserConfig: function() {
                $localstorage.setObject('userConfig', defaultUserConfig());
            },
>>>>>>> origin/master
            resetUserConfig: function() {
                userConfig = defaultUserConfig();
                $localstorage.setObject('userConfig', userConfig);
            },
<<<<<<< HEAD

=======
>>>>>>> origin/master
            isValidLanguage: function(language) {
                return (SETTINGS.languages.indexOf(language) >= 0);
            }
        }

<<<<<<< HEAD
    });
=======
    }]);
>>>>>>> origin/master
