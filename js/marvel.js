var marvel = angular.module("marvel", ["marvel.routes", "marvel.controllers", "marvel.constants", "marvel.services", "marvel.directives"]);

marvel.config(function($httpProvider) {
    $httpProvider.interceptors.push("loadingInterceptor");
});