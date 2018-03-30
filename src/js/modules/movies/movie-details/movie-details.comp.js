 "use strict";

 function movieDetailsController($http, $stateParams) {
    var vm = this;
    vm.movieDetails = [];

    $http.get("data/movies.json").then(function(response) {
        vm.movieDetails = response.data.movie_list;
    });

    vm.movieId = $stateParams.id;
 }

 movies.component("movieDetails", {
    templateUrl: "src/js/modules/movies/movie-details/movie-details.temp.html",
    controller: ["$http", "$stateParams", movieDetailsController]
 });