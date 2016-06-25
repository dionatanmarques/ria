var routes = angular.module("marvel.routes", ["ngRoute"]);

routes.config(function($routeProvider) {
    $routeProvider.when("/characters", {
        templateUrl: "partials/characters.html",
        controller: "CharactersController"
    })
    .when("/character/:id", {
    	templateUrl: "partials/character-comics.html",
    	controller: "ComicsController",
    })
    .when("/character/:id/comics",{
    	redirectTo : "/character/:id"
    })
    .when("/character/:id/stories", {
    	templateUrl: "partials/character-stories.html",
    	controller: "StoriesController",
    })
    .otherwise({
        redirectTo: "/characters"
    });
});