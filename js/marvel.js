var marvel = angular.module("marvel", ["marvel.routes", "marvel.controllers", "marvel.constants", "marvel.services"]);

marvel.config(function($httpProvider) {
    $httpProvider.interceptors.push("loadingInterceptor");
});