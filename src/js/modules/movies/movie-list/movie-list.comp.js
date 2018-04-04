(function () {
    "use strict";

    function movieListController(movieService, $location) {
        var vm = this;
        vm.movieItems = [];
        vm.currentPage = 1;
        vm.pageSize = 10;

        // Get Movie List
        movieService.getMovies().then(function (response) {
            vm.movieItems = response.data.movie_list;
        });
        
        // Send to the details page using id
        vm.movieDetails = function (id) {
            var tempLoc = "/movie-list/" + id;
            $location.path(tempLoc);
        }

        // Pagination Page Change
        vm.pageChangeHandler = function (num) {
            console.log('meals page changed to ' + num);
        };
    }

    movies.component("movieList", {
        templateUrl: "src/js/modules/movies/movie-list/movie-list.temp.html",
        controller: ["movieService", "$location", movieListController]
    });
})();