var directives = angular.module("marvel.directives", []);

directives.directive("comicCard", function(){
	return {
			  restrict: 'E', 
		      templateUrl: "partials/comic-card.html",
	};
})