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
            }).success(function(response) {
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
        },
        events: function(id, offset) {
            var deferred = $q.defer();
            $http({
                method: "GET",
                url: marvelApi.URL + "/characters/" + id + "/events",
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
        series: function(id, offset) {
            var deferred = $q.defer();
            $http({
                method: "GET",
                url: marvelApi.URL + "/characters/" + id + "/series",
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

services.factory("Comics", function($http, $q, marvelApi) {
    return {
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
            }).success(function(response) {
                deferred.resolve(response.data.results[0]);
            });
            return deferred.promise;
        },
        characters: function(id,offset) {
            var deferred = $q.defer();
            $http({
                method: "GET",
                url: marvelApi.URL + "/comics/" + id + "/characters",
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

services.factory("Events", function($http, $q, marvelApi) {
    return {
        event: function(id) {
            var deferred = $q.defer();
            $http({
                method: "GET",
                url: marvelApi.URL + "/events/" + id,
                params: {
                    apikey: marvelApi.KEY,
                    ts: marvelApi.TS,
                    hash: marvelApi.HASH
                }
            }).success(function(response) {
                deferred.resolve(response.data.results[0]);
            });
            return deferred.promise;
        },
        characters: function(id,offset) {
            var deferred = $q.defer();
            $http({
                method: "GET",
                url: marvelApi.URL + "/events/" + id + "/characters",
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

services.factory("Series", function($http, $q, marvelApi) {
    return {
        serie: function(id) {
            var deferred = $q.defer();
            $http({
                method: "GET",
                url: marvelApi.URL + "/series/" + id,
                params: {
                    apikey: marvelApi.KEY,
                    ts: marvelApi.TS,
                    hash: marvelApi.HASH
                }
            }).success(function(response) {
                deferred.resolve(response.data.results[0]);
            });
            return deferred.promise;
        },
        characters: function(id,offset) {
            var deferred = $q.defer();
            $http({
                method: "GET",
                url: marvelApi.URL + "/series/" + id + "/characters",
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

services.factory("Stories", function($http, $q, marvelApi) {
    return {
        story: function(id) {
            var deferred = $q.defer();
            $http({
                method: "GET",
                url: marvelApi.URL + "/stories/" + id,
                params: {
                    apikey: marvelApi.KEY,
                    ts: marvelApi.TS,
                    hash: marvelApi.HASH
                }
            }).success(function(response) {
                deferred.resolve(response.data.results[0]);
            });
            return deferred.promise;
        },
        characters: function(id,offset) {
            var deferred = $q.defer();
            $http({
                method: "GET",
                url: marvelApi.URL + "/stories/" + id + "/characters",
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