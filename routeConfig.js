angular.module("agendator").config(function($routeProvider) {
  $routeProvider.when("/newuser", {
    templateUrl: "view/newUser.html"
  });
  $routeProvider.when("/users", {
    templateUrl: "view/listUsers.html",
    controller: "userController"
  });
  $routeProvider.when("/courses", {
    templateUrl: "view/listCourses.html",
    controller: "courseController"
  });
});
