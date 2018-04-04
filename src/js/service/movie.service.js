(function () {
    "use strict";

    function movieService($http) {
        var vm = this;

        vm.getMovies = function () {
            return $http.get('data/movies.json');
        };
    }

    imdb.service("movieService", ["$http", movieService]);

})();