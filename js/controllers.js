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

controllers.controller("EventController", function($scope, $routeParams, Characters) {
    $scope.event;
    $scope.eventCharacters;

    Characters.event($routeParams.id).then(function(resolve) {
        $scope.event = resolve;
    });

    Characters.evChacacters($routeParams.id).then(function(resolve) {
        $scope.eventCharacters = resolve;
    });

});

controllers.controller("EventsController", function($scope, $routeParams, Characters) {
    $scope.character;
    $scope.events;
    $scope.total;

    Characters.character($routeParams.id).then(function(resolve) {
        $scope.character = resolve;
    });

    Characters.events($routeParams.id).then(function(resolve) {
        $scope.events = resolve.results;
        $scope.total = resolve.total;
    });

    $scope.showMore = function() {
        var offset = $scope.events.length;
        Characters.events($scope.character.id, offset).then(function(resolve) {
            Array.prototype.push.apply($scope.events, resolve.results);
        });
    };

    $scope.hideMoreButton = function() {
        if (typeof $scope.events == "undefined") {
            return true;
        }
        return $scope.total == $scope.events.length;
    };
});

controllers.controller("SerieController", function($scope, $routeParams, Characters) {
    $scope.serie;
    $scope.serieCharacters;

    Characters.serie($routeParams.id).then(function(resolve) {
        $scope.serie = resolve;
    });

    Characters.seChacacters($routeParams.id).then(function(resolve) {
        $scope.serieCharacters = resolve;
    });

});

controllers.controller("SeriesController", function($scope, $routeParams, Characters) {
    $scope.character;
    $scope.series;
    $scope.total;

    Characters.character($routeParams.id).then(function(resolve) {
        $scope.character = resolve;
    });

    Characters.series($routeParams.id).then(function(resolve) {
        $scope.series = resolve.results;
        $scope.total = resolve.total;
    });

    $scope.showMore = function() {
        var offset = $scope.series.length;
        Characters.series($scope.character.id, offset).then(function(resolve) {
            Array.prototype.push.apply($scope.series, resolve.results);
        });
    };

    $scope.hideMoreButton = function() {
        if (typeof $scope.series == "undefined") {
            return true;
        }
        return $scope.total == $scope.series.length;
    };
});