angular.module('starter.services', [])
    .factory('Auth', function($firebaseAuth,$rootScope) {
        var usersRef = new Firebase("https//mybankatom.firebaseio.com/users");
        return {
            iniciarSesionGoogle: function() {
                usersRef.authWithOAuthPopup("google", function(error, authData) { 
                	$rootScope.nombreUsuario = authData.google.displayName,
                	$rootScope.token = authData.token,
                	$rootScope.fotoPerfil = authData.google.profileImageURL,
                	 }, {
                    remember: "sessionOnly",
                    scope: "email"
                });
            }
        }
    });
