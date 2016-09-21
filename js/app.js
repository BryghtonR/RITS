var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
  .when("/", {
    controller: "MainController",
    templateUrl: "views/home.html"
  })
  .when("/section/:sectionId", {
    controller: "MainController",
    templateUrl: "views/section.html"
  })
  .when("/section/:sectionId/item/:itemId", {
    controller: "MainController",
    templateUrl: "views/item.html"
  })
  .otherwise({
    redirectTo: "/"
  });
});
