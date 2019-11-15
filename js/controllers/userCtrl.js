angular
  .module("agendator")
  .controller("userController", function($scope, $http) {
    $scope.app = "agendator";
    $scope.users = [];
    $scope.selectedUser = {};

    var loadUsers = function() {
      $http
        .get("http://localhost:3333/usuarios")
        .then(successCallback, errorCallback);

      function successCallback(response) {
        $scope.users = response.data;
      }
      function errorCallback(error) {
        console.log(error);
      }
    };

    $scope.vai = function() {
      console.log("OK");
    };

    $scope.addUser = function(user) {
      console.log(user);
      $http
        .post("http://localhost:3333/usuarios", user)
        .then(successCallback, errorCallback);
      function successCallback() {
        delete $scope.user;
        $scope.userForm.$setPristine();
      }
      function errorCallback(error) {
        console.log(error);
      }
    };

    $scope.deleteUser = function(user) {
      $http({
        method: "DELETE",
        url: "http://localhost:9000/api/v1/customers" + "/" + user.id
      });
      var index = $scope.users.indexOf(user);
      if (index > -1) {
        $scope.users.splice(index, 1);
      }
    };

    $scope.updateUser = function(user) {
      $http({
        method: "PUT",
        url: "http://localhost:9000/api/v1/customers" + "/" + user.id,
        data: user
      });
      $scope.reset();
    };

    var getUser = function(id) {
      $http
        .get("http://localhost:9000/api/v1/customers" + "/" + id)
        .then(successCallback, errorCallback);

      function successCallback(response) {
        return response.data;
      }
      function errorCallback(error) {
        console.log(error);
      }
    };

    $scope.isUserSelected = function(users) {
      return users.some(function(users) {
        return users.selected;
      });
    };

    $scope.getTemplate = function(user) {
      if (user.id === $scope.selectedUser.id) {
        return "edit";
      } else return "display";
    };

    $scope.editUser = function(user) {
      $scope.selectedUser = angular.copy(user);
    };

    $scope.reset = function() {
      $scope.selectedUser = {};
    };

    loadUsers();
  });
