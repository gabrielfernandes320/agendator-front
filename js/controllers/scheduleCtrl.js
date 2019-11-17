angular
  .module("agendator")
  .controller("scheduleController", function($scope, $http, Login) {
    $scope.app = "agendator";
    $scope.schedules = [];
    $scope.selectedSchedule = {};
    $scope.loggedUser = Login.getLoggedUser();
    $scope.schedule = {};
    $scope.schedule.id_usuario = $scope.loggedUser.id;

    $http.defaults.headers.common["Authorization"] =
      "Bearer " + Login.getAutToken();
    var loadSchedules = function() {
      $http
        .get("http://localhost:3333/horarios")
        .then(successCallback, errorCallback);

      function successCallback(response) {
        $scope.schedules = response.data;
      }
      function errorCallback(error) {
        console.log(error);
      }
    };

    $scope.vai = function() {
      console.log("OK");
    };

    $scope.addSchedule = function(schedule) {
      console.log(schedule);
      $http
        .post("http://localhost:3333/horarios", schedule)
        .then(successCallback, errorCallback);
      function successCallback() {
        delete $scope.schedule;
        $scope.scheduleForm.$setPristine();
      }
      function errorCallback(error) {
        console.log(error);
      }
    };

    $scope.deleteSchedule = function(schedule) {
      $http({
        method: "DELETE",
        url: "http://localhost:3333/horarios" + "/" + schedule.id
      });
      var index = $scope.schedules.indexOf(schedule);
      if (index > -1) {
        $scope.schedules.splice(index, 1);
      }
    };

    $scope.updateSchedule = function(schedule) {
      $http({
        method: "PUT",
        url: "http://localhost:3333/horarios" + "/" + schedule.id,
        data: schedule
      });
      $scope.reset();
    };

    var getSchedule = function(id) {
      $http
        .get("http://localhost:3333/horarios" + "/" + id)
        .then(successCallback, errorCallback);

      function successCallback(response) {
        return response.data;
      }
      function errorCallback(error) {
        console.log(error);
      }
    };

    $scope.isScheduleSelected = function(schedules) {
      return schedules.some(function(schedules) {
        return schedules.selected;
      });
    };

    $scope.getTemplate = function(schedule) {
      if (schedule.id === $scope.selectedSchedule.id) {
        return "edit";
      } else return "display";
    };

    $scope.editSchedule = function(schedule) {
      $scope.selectedSchedule = angular.copy(schedule);
    };

    $scope.reset = function() {
      $scope.selectedSchedule = {};
    };

    loadSchedules();
    console.log($scope.schedules);
  });
