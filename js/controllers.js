var controllers = angular.module("marvel.controllers", []);

controllers.controller("CharactersController", function($scope, Characters) {
    $scope.characters;
    
    Characters.all().then(function(resolve) {
        $scope.characters = resolve;
    });
});