angular
  .module("agendator")
  .controller("courseController", function($scope, $http) {
    $scope.app = "agendator";
    $scope.courses = [];
    $scope.selectedCourse = {};

    $http.defaults.headers.common["Authorization"] =
      "Bearer " +
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidGlwbyI6IkEiLCJpYXQiOjE1NzM4Nzc4OTYsImV4cCI6MTU3NDQ4MjY5Nn0.hTEWBs4WV-iukiP9nDlAaeEVF8o8L03_qP0Mv0ETNa0";
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

    $scope.addCourse = function(course) {
      console.log(course);
      $http
        .post("http://localhost:3333/cursos", course)
        .then(successCallback, errorCallback);
      function successCallback() {
        delete $scope.course;
        $scope.courseForm.$setPristine();
      }
      function errorCallback(error) {
        console.log(error);
      }
    };

    $scope.deleteCourse = function(course) {
      $http({
        method: "DELETE",
        url: "http://localhost:3333/cursos" + "/" + course.id
      });
      var index = $scope.courses.indexOf(course);
      if (index > -1) {
        $scope.courses.splice(index, 1);
      }
    };

    $scope.updateCourse = function(course) {
      $http({
        method: "PUT",
        url: "http://localhost:3333/cursos" + "/" + course.id,
        data: course
      });
      $scope.reset();
    };

    var getCourse = function(id) {
      $http
        .get("http://localhost:3333/cursos" + "/" + id)
        .then(successCallback, errorCallback);

      function successCallback(response) {
        return response.data;
      }
      function errorCallback(error) {
        console.log(error);
      }
    };

    $scope.isCourseSelected = function(courses) {
      return courses.some(function(courses) {
        return courses.selected;
      });
    };

    $scope.getTemplate = function(course) {
      if (course.id === $scope.selectedCourse.id) {
        return "edit";
      } else return "display";
    };

    $scope.editCourse = function(course) {
      $scope.selectedCourse = angular.copy(course);
    };

    $scope.reset = function() {
      $scope.selectedCourse = {};
    };

    loadCourses();
    console.log($scope.courses);
  });
