angular.module('searchService', [])
    .service("searchMoviesAPI", function($http){

        var searchUrl = "http://www.omdbapi.com/?s=";

        var searchResults = [];

        this.getSearchResults = function(){ return searchResults };

        this.makeSearch = function(text){
            console.log("making search");
            console.log(text);
            return new Promise(function(resolve, reject){
                $http.get(searchUrl + text)
                    .then(function(results){
                        if (results.data.Search){
                            searchResults = results.data.Search;
                            resolve(searchResults);
                        } else {
                            searchResults = [];
                            resolve(searchResults);
                        }
                    }, function(error){
                        searchResults = [];
                        reject({error: "No Endpoint"});
                    });
            });
        };
    });