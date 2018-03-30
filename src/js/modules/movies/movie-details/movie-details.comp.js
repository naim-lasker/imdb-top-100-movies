 "use strict";

 function movieDetailsController($http, $stateParams) {
    var vm = this;
    vm.movieDetails = [];

    $http.get("data/movie-details.json").then(function(response) {
        vm.movieDetails = response.data.movie_details;
    });

    vm.movieId = $stateParams.id;
 }

 movies.component("movieDetails", {
    templateUrl: "src/js/modules/movies/movie-details/movie-details.temp.html",
    controller: ["$http", "$stateParams", movieDetailsController]
 });