var routes = angular.module("marvel.routes", ["ngRoute"]);

routes.config(function($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "partials/characters.html",
        controller: "CharactersController"
    });
});