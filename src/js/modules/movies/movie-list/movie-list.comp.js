"use strict";

function movieListController($http, $location) {
    var vm = this;
    vm.movieItems = [];

    $http.get("data/movie-list.json").then(function(response) {
        vm.movieItems = response.data.movie_list;
    });

    vm.movieDetails = function(id) {
        var tempLoc = `/movie-list/${id}`;
        $location.path(tempLoc);
    }

}

movies.component("movieList", {
    templateUrl: "src/js/modules/movies/movie-list/movie-list.temp.html",
    controller: ["$http", "$location", movieListController]
});