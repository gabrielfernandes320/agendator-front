angular
  .module("agendator")
  .controller("activityController", function($scope, $http, Login) {
    $scope.app = "agendator";
    $scope.activities = [];
    $scope.selectedActivity = {};

    $http.defaults.headers.common["Authorization"] =
      "Bearer " + Login.getAutToken();
    var loadActivities = function() {
      $http
        .get("http://localhost:3333/atividades")
        .then(successCallback, errorCallback);

      function successCallback(response) {
        $scope.activities = response.data;
      }
      function errorCallback(error) {
        console.log(error);
      }
    };

    $scope.vai = function() {
      console.log("OK");
    };

    $scope.addActivity = function(activity) {
      console.log(activity);
      $http
        .post("http://localhost:3333/atividades", activity)
        .then(successCallback, errorCallback);
      function successCallback() {
        delete $scope.activity;
        $scope.activityForm.$setPristine();
      }
      function errorCallback(error) {
        console.log(error);
      }
    };

    $scope.deleteActivity = function(activity) {
      $http({
        method: "DELETE",
        url: "http://localhost:3333/atividades" + "/" + activity.id
      });
      var index = $scope.activities.indexOf(activity);
      if (index > -1) {
        $scope.activities.splice(index, 1);
      }
    };

    $scope.updateActivity = function(activity) {
      $http({
        method: "PUT",
        url: "http://localhost:3333/atividades" + "/" + activity.id,
        data: activity
      });
      $scope.reset();
    };

    var getActivity = function(id) {
      $http
        .get("http://localhost:3333/atividades" + "/" + id)
        .then(successCallback, errorCallback);

      function successCallback(response) {
        return response.data;
      }
      function errorCallback(error) {
        console.log(error);
      }
    };

    $scope.isActivitySelected = function(activities) {
      return activities.some(function(activities) {
        return activities.selected;
      });
    };

    $scope.getTemplate = function(activity) {
      if (activity.id === $scope.selectedActivity.id) {
        return "edit";
      } else return "display";
    };

    $scope.editActivity = function(activity) {
      $scope.selectedActivity = angular.copy(activity);
    };

    $scope.reset = function() {
      $scope.selectedActivity = {};
    };

    loadActivities();
    console.log($scope.activities);
  });
