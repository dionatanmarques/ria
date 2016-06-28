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
    .when("/story/:id", {
        templateUrl: "partials/story.html",
        controller: "StoryController",
    })
    .when("/event/:id", {
        templateUrl: "partials/event.html",
        controller: "EventController",
    })
    .when("/serie/:id", {
       templateUrl: "partials/serie.html",
       controller: "SerieController",
    })
    .otherwise({
        redirectTo: "/characters"
    });
});