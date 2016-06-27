var controllers = angular.module("marvel.controllers", []);

controllers.controller("CharactersController", function($scope, Characters) {
    $scope.characters;
    $scope.total;

    Characters.all().then(function(resolve) {
        $scope.characters = resolve.results;
        $scope.total = resolve.total;
    });
    
    $scope.showMore = function() {
        var offset = $scope.characters.length;
        Characters.all(offset).then(function(resolve) {
            Array.prototype.push.apply($scope.characters, resolve.results);
        });
    };

    $scope.hideMoreButton = function() {
        if (typeof $scope.characters == "undefined") {
            return true;
        }
        return $scope.total == $scope.characters.length;
    };
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
controllers.controller("ComicController", function($scope, $routeParams, Characters) {
    $scope.comic;
    $scope.comicCharacters;
    
    Characters.comic($routeParams.id).then(function(resolve) {
        $scope.comic = resolve;
    });

    Characters.cChacacters($routeParams.id).then(function(resolve) {
        $scope.comicCharacters = resolve;
    });

});

controllers.controller("ComicsController", function($scope, $routeParams, Characters) {
    $scope.character;
    $scope.comics;
    $scope.total;

    Characters.character($routeParams.id).then(function(resolve) {
        $scope.character = resolve;
    });

    Characters.comics($routeParams.id).then(function(resolve) {
        $scope.comics = resolve.results;
        $scope.total = resolve.total;
    });

    $scope.showMore = function() {
        var offset = $scope.comics.length;
        Characters.comics($scope.character.id, offset).then(function(resolve) {
            Array.prototype.push.apply($scope.comics, resolve.results);
        });
    };

    $scope.hideMoreButton = function() {
        if (typeof $scope.comics == "undefined") {
            return true;
        }
        return $scope.total == $scope.comics.length;
    };
});

controllers.controller("StoryController", function($scope, $routeParams, Characters) {
    $scope.story;
    $scope.storyCharacters;
    
    Characters.story($routeParams.id).then(function(resolve) {
        $scope.story = resolve;
    });

    Characters.stChacacters($routeParams.id).then(function(resolve) {
        $scope.storyCharacters = resolve;
    });

});

controllers.controller("StoriesController", function($scope, $routeParams, Characters) {
    $scope.character;
    $scope.stories;
    $scope.total;

    Characters.character($routeParams.id).then(function(resolve) {
        $scope.character = resolve;
    });

    Characters.stories($routeParams.id).then(function(resolve) {
        $scope.stories = resolve.results;
        $scope.total = resolve.total;
    });

    $scope.showMore = function() {
        var offset = $scope.stories.length;
        Characters.stories($scope.character.id, offset).then(function(resolve) {
            Array.prototype.push.apply($scope.stories, resolve.results);
        });
    };

    $scope.hideMoreButton = function() {
        if (typeof $scope.stories == "undefined") {
            return true;
        }
        return $scope.total == $scope.stories.length;
    };
});