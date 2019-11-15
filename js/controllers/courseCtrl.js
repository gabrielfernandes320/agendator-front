angular
  .module("agendator")
  .controller("courseController", function($scope, $http) {
    $scope.app = "agendator";
    $scope.courses = [];
    $scope.selectedUser = {};

    $http.defaults.headers.common["Authorization"] =
      "Bearer " +
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidGlwbyI6IkEiLCJpYXQiOjE1NzM3Nzc0MjAsImV4cCI6MTU3NDM4MjIyMH0.ER04yOH0f0MLkC7do4_ZUXNX86jW8-5rmbZE2BCXu2w";
    var loadCourses = function() {
      $http
        .get("http://localhost:3333/cursos")
        .then(successCallback, errorCallback);

      function successCallback(response) {
        $scope.courses = response.data;
      }
      function errorCallback(error) {
        console.log(error);
      }
    };

    $scope.vai = function() {
      console.log("OK");
    };

    $scope.addUser = function(course) {
      console.log(course);
      $http
        .post("http://localhost:3333/usuarios", course)
        .then(successCallback, errorCallback);
      function successCallback() {
        delete $scope.course;
        $scope.courseForm.$setPristine();
      }
      function errorCallback(error) {
        console.log(error);
      }
    };

    $scope.deleteUser = function(course) {
      $http({
        method: "DELETE",
        url: "http://localhost:9000/api/v1/customers" + "/" + course.id
      });
      var index = $scope.courses.indexOf(course);
      if (index > -1) {
        $scope.courses.splice(index, 1);
      }
    };

    $scope.updateUser = function(course) {
      $http({
        method: "PUT",
        url: "http://localhost:9000/api/v1/customers" + "/" + course.id,
        data: course
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

    $scope.isUserSelected = function(courses) {
      return courses.some(function(courses) {
        return courses.selected;
      });
    };

    $scope.getTemplate = function(course) {
      if (course.id === $scope.selectedUser.id) {
        return "edit";
      } else return "display";
    };

    $scope.editUser = function(course) {
      $scope.selectedUser = angular.copy(course);
    };

    $scope.reset = function() {
      $scope.selectedUser = {};
    };

    loadCourses();
    console.log($scope.courses);
  });
