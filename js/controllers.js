var controllers = angular.module("marvel.controllers", []);

controllers.controller("CharactersController", function($scope, Characters) {
    $scope.characters;
    
    Characters.all().then(function(resolve) {
        $scope.characters = resolve;
    });
    
    $scope.showMore = function() {
        var offset = $scope.characters.length;
        Characters.all(offset).then(function(resolve) {
            Array.prototype.push.apply($scope.characters, resolve);
            console.log($scope.characters);
        });
    }
});