(function () {
    "use strict";

    function movieListController($http, $location) {
        var vm = this;
        vm.movieItems = [];

        // Get Novie List
        $http.get("data/movies.json").then(function (response) {
            vm.movieItems = response.data.movie_list;
        });

        // Send to the details page using id
        vm.movieDetails = function (id) {
            var tempLoc = "/movie-list/" + id;
            $location.path(tempLoc);
        }
    }

    movies.component("movieList", {
        templateUrl: "src/js/modules/movies/movie-list/movie-list.temp.html",
        controller: ["$http", "$location", movieListController]
    });
})();