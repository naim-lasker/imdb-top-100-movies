"use strict";

function getMovieList($http) {
    return $http.get("data/movies.json");
}
return 

imdb.service("movieList", ["$http", getMovieList]);