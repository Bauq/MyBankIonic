angular.module('starter.services', [])
    .factory('Auth', function($firebaseAuth,$rootScope) {
        var usersRef = new Firebase("https//mybankatom.firebaseio.com/users");
        var users = usersRef.push();
        return {
            iniciarSesionGoogle: function() {
                usersRef.authWithOAuthPopup("google", function(error, authData) { 
                    $rootScope.uid = authData.uid,
                    $rootScope.email = authData.google.email,
                	$rootScope.nombreUsuario = authData.google.displayName,
                	$rootScope.token = authData.token,
                	$rootScope.fotoPerfil = authData.google.profileImageURL,
                    users.set({
                            email:$rootScope.email, 
                            name: $rootScope.nombreUsuario, 
                            token: $rootScope.token,
                        });
                }, {
                    remember: "sessionOnly",
                    scope: "email"
                });
            }
        }
    });
