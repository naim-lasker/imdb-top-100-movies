(function () {
    "use strict";

    function addMoviesController($mdToast, $mdDialog) {
        var vm = this;

        vm.formData = {};
        vm.clickedMovie = {};
        vm.showAddMovie = false;
        vm.showEditMovie = false;

        // Movie List Array
        vm.movieList = [
            { ranking: 1, movieName: "Hacksaw Ridge", releaseYear: 2016, duration: 139, rating: 8.8 },
            { ranking: 2, movieName: "The Revenant", releaseYear: 2015, duration: 156, rating: 8.7 },
            { ranking: 3, movieName: "Dunkirk", releaseYear: 2017, duration: 106, rating: 8.6 },
            { ranking: 4, movieName: "The Miracle", releaseYear: 2015, duration: 136, rating: 8.5 },
            { ranking: 5, movieName: "Drishyam ", releaseYear: 2013, duration: 160, rating: 8.4 },
            { ranking: 6, movieName: "Kshanam", releaseYear: 2016, duration: 110, rating: 8.3 },
            { ranking: 7, movieName: "Boyhood", releaseYear: 2014, duration: 165, rating: 8.2 },
            { ranking: 8, movieName: "Train to Busan", releaseYear: 2016, duration: 118, rating: 8.1 }
        ];

        // Show Add Movie Input fields
        vm.showMovieInput = function () {
            vm.showAddMovie = true;
            vm.showEditMovie = false;
        }

        // Hide Add Movie Inputs fields
        vm.hideMovieInput = function () {
            vm.showAddMovie = false;
        }

        // Add New Movie
        vm.addMovie = function () {
            vm.movieList.push(vm.formData);
            vm.formData = {}
            vm.showAddMovie = false;
            console.log("ju");

            $mdToast.show(
                $mdToast.simple()
                    .textContent('Movie is added Successfully')
                    .hideDelay(4000)
            );
        };


        // Select Specific Movies
        vm.selectMovie = function (movie) {
            vm.clickedMovie = movie;
            vm.showEditMovie = true;
        };


        // Update Movies
        vm.updateMovie = function () {
            vm.showEditMovie = false;
            $mdToast.show(
                $mdToast.simple()
                    .textContent('Movie is Updated Successfully')
                    .hideDelay(4000)
            );
        };

        vm.hideEditMovie = function () {
            vm.showEditMovie = false;
        }


        // Delete Movie
        var deleteMovie = function () {
            var movieId = vm.movieList.indexOf(vm.clickedMovie);
            vm.movieList.splice(movieId, 1);
            vm.errorMessege = "Movie is deleted";
        };

        vm.deletePrompt = function (ev, movie) {
            vm.clickedMovie = movie;
            var confirm = $mdDialog.confirm()
                .textContent('Are you sure to delete ' + movie.movieName + ' (' + movie.releaseYear + ')' + ' movie?')
                .targetEvent(ev)
                .ok('Delete')
                .cancel('Cancel');

            $mdDialog.show(confirm).then(function () {
                deleteMovie();
                $mdToast.show(
                    $mdToast.simple()
                        .textContent('Movie is Deleted')
                        .hideDelay(4000)
                );
            });
        }
    }

    movies.component("addMovies", {
        templateUrl: "src/js/modules/movies/add-movies/add-movies.temp.html",
        controller: ["$mdToast", "$mdDialog", addMoviesController]
    });
})();