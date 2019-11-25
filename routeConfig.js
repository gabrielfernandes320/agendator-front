angular.module("agendator").config(function($routeProvider) {
  $routeProvider.when("/newuser", {
    templateUrl: "view/user/newUser.html"
  });
  $routeProvider.when("/users", {
    templateUrl: "view/user/listUsers.html",
    controller: "userController"
  });

  $routeProvider.when("/courses", {
    templateUrl: "view/course/listCourses.html",
    controller: "courseController"
  });
  $routeProvider.when("/newcourse", {
    templateUrl: "view/course/newCourse.html"
  });

  $routeProvider.when("/activities", {
    templateUrl: "view/activity/listActivities.html",
    controller: "activityController"
  });
  $routeProvider.when("/newactivity", {
    templateUrl: "view/activity/newActivity.html"
  });
  $routeProvider.when("/associateactivities", {
    templateUrl: "view/activity/associateActivities.html"
  });

  $routeProvider.when("/schedules", {
    templateUrl: "view/schedule/listSchedules.html",
    controller: ""
  });
  $routeProvider.when("/newschedule", {
    templateUrl: "view/schedule/newSchedule.html"
  });

  $routeProvider.when("/services", {
    templateUrl: "view/service/listServices.html",
    controller: ""
  });
  $routeProvider.when("/newservice", {
    templateUrl: "view/service/newService.html"
  });

  $routeProvider.when("/", {
    templateUrl: "view/login.html"
  });

  $routeProvider.when("/dashboard", {
    templateUrl: "view/dashboard.html"
  });
});
