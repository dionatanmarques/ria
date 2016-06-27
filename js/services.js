var services = angular.module("marvel.services", []);

services.factory("Characters", function($http, $q, marvelApi) {
    return {
        all: function(offset) {
            var deferred = $q.defer();
            $http({
                method: "GET",
                url: marvelApi.URL + "/characters",
                params: {
                    offset: offset | 0,
                    apikey: marvelApi.KEY,
                    ts: marvelApi.TS,
                    hash: marvelApi.HASH
                }
            }).success(function(response) {
                deferred.resolve(response.data.results);
            });
            return deferred.promise;
        },
        character: function(id) {
            var deferred = $q.defer();
            $http({
                method: "GET",
                url: marvelApi.URL + "/characters/" + id,
                params: {
                    apikey: marvelApi.KEY,
                    ts: marvelApi.TS,
                    hash: marvelApi.HASH
                }
            }).success(function(response){
                deferred.resolve(response.data.results[0]);
            });
            return deferred.promise;
        },
        comics: function(id, offset) {
            var deferred = $q.defer();
            $http({
                method: "GET",
                url: marvelApi.URL + "/characters/" + id + "/comics",
                params: {
                    offset: offset | 0,
                    apikey: marvelApi.KEY,
                    ts: marvelApi.TS,
                    hash: marvelApi.HASH
                }
            }).success(function(response) {
                deferred.resolve(response.data.results);
            });
            return deferred.promise;
        },
        stories: function(id, offset) {
            var deferred = $q.defer();
            $http({
                method: "GET",
                url: marvelApi.URL + "/characters/" + id + "/stories",
                params: {
                    offset: offset | 0,
                    apikey: marvelApi.KEY,
                    ts: marvelApi.TS,
                    hash: marvelApi.HASH
                }
            }).success(function(response) {
                deferred.resolve(response.data.results);
            });
            return deferred.promise;
        }
    }
});