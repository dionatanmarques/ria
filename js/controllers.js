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
})
.controller('CharacterController', function($scope, Characters, $routeParams){
    Characters.character($routeParams.id).then(function(resolve){
            $scope.character = resolve;
             console.log(resolve);
    });
})
.controller('ComicsController', function($scope, Characters, $routeParams){
    Characters.character($routeParams.id).then(function(resolve){
            $scope.character = resolve;
             console.log(resolve);
    });
    Characters.comics($routeParams.id).then(function(resolve){
            $scope.comics = resolve;
             console.log(resolve);
    });

    $scope.showMore = function() {
        var offset = $scope.comics.length;
        Characters.comics($scope.character.id, offset).then(function(resolve) {
            Array.prototype.push.apply($scope.comics, resolve);
            console.log($scope.comics);
        });
    }
})
.controller('StoriesController', function($scope, Characters, $routeParams){
    Characters.character($routeParams.id).then(function(resolve){
            $scope.character = resolve;
             console.log(resolve);
    });
    Characters.stories($routeParams.id).then(function(resolve){
            $scope.stories = resolve;
             console.log(resolve);
    });

    $scope.showMore = function() {
        var offset = $scope.stories.length;
        Characters.stories($scope.character.id, offset).then(function(resolve) {
            Array.prototype.push.apply($scope.stories, resolve);
            console.log($scope.stories);
        });
    }
});