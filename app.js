var app = angular.module("agendator", ["ngRoute"]);

app.factory("Login", function() {
  var loggedUser;
  var autToken;
  var logged = false;

  return {
    setAutToken: function(AutToken) {
      autToken = AutToken;
    },
    getAutToken: function() {
      return autToken;
    },
    setLoggedUser: function(LoggedUser) {
      loggedUser = LoggedUser;
    },
    getLoggedUser: function() {
      return loggedUser;
    },
    setLogged: function() {
      logged = true;
    },
    getLogged: function() {
      return logged;
    }
  };
});
