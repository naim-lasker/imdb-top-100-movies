"use strict";

function homeController($http) {
    var vm = this;
    vm.movieItems = [];

    $http.get("data/movies.json").then(function(response) {
        vm.movieItems = response.data.movie_list;
    });
}

home.component("homeComp", {
    templateUrl: "src/js/modules/home/home.temp.html",
    controller: ["$http", homeController]
});