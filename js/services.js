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
                deferred.resolve(response.data);
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
                deferred.resolve(response.data);
            });
            return deferred.promise;
        },
         comic: function(id) {
            var deferred = $q.defer();
            $http({
                method: "GET",
                url: marvelApi.URL + "/comics/" + id,
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
        cChacacters: function(id,offset) {
            var deferred = $q.defer();
            $http({
                method: "GET",
                url: marvelApi.URL + "/comics/" + id +"/characters",
                params: {
                    offset: offset | 0,
                    apikey: marvelApi.KEY,
                    ts: marvelApi.TS,
                    hash: marvelApi.HASH
                }
            }).success(function(response){
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
                deferred.resolve(response.data);
            });
            return deferred.promise;
        }
    }
});

services.factory("loadingInterceptor", function() {
    return {
        request: function(config) {
            $(".loading").show();
            return config;
        },
        response: function(response) {
            $(".loading").hide();
            return response;
        }
    }
});