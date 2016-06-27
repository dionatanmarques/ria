var routes = angular.module("marvel.routes", ["ngRoute"]);

routes.config(function($routeProvider) {
    $routeProvider.when("/characters", {
        templateUrl: "partials/characters.html",
        controller: "CharactersController"
    })
    .when("/character/:id", {
    	templateUrl: "partials/character.html",
    	controller: "CharacterController",
    })
    .when("/comic/:id", {
        templateUrl: "partials/comic.html",
        controller: "ComicController",
    })
    .otherwise({
        redirectTo: "/characters"
    });
});