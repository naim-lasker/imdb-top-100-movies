(function () {
    "use strict";

    function movieDetailsController(movieService, $stateParams) {
        var vm = this;
        vm.movieDetails = [];

        // Get Movie Details
        movieService.getMovies().then(function (response) {
            vm.movieDetails = response.data.movie_list;
        });

        // Tracking Routig state using id
        vm.movieId = $stateParams.id;
    }

    movies.component("movieDetails", {
        templateUrl: "src/js/modules/movies/movie-details/movie-details.temp.html",
        controller: ["movieService", "$stateParams", movieDetailsController]
    });
})();