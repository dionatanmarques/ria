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
        });
    }
});

controllers.controller("CharacterController", function($scope, $routeParams, Characters) {
    angular.element(document).ready(function() {
        $("ul.tabs").tabs();
    });

    $scope.character;

    Characters.character($routeParams.id).then(function(resolve) {
        $scope.character = resolve;
    });
});

controllers.controller("ComicsController", function($scope, Characters, $routeParams) {
    $scope.character;
    $scope.comics;

    Characters.character($routeParams.id).then(function(resolve) {
        $scope.character = resolve;
    });

    Characters.comics($routeParams.id).then(function(resolve) {
        $scope.comics = resolve;
    });

    $scope.showMore = function() {
        var offset = $scope.comics.length;
        Characters.comics($scope.character.id, offset).then(function(resolve) {
            Array.prototype.push.apply($scope.comics, resolve);
        });
    }
});

controllers.controller("StoriesController", function($scope, Characters, $routeParams) {
    $scope.character;
    $scope.stories;

    Characters.character($routeParams.id).then(function(resolve) {
        $scope.character = resolve;
    });

    Characters.stories($routeParams.id).then(function(resolve) {
        $scope.stories = resolve;
    });

    $scope.showMore = function() {
        var offset = $scope.stories.length;
        Characters.stories($scope.character.id, offset).then(function(resolve) {
            Array.prototype.push.apply($scope.stories, resolve);
        });
    }
});