"use strict";

function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
        url: '/',
        template: '<home-comp></home-comp>'
    })

    .state('/movie-list', {
        url: '/movie-list',
        template: '<movie-list></movie-list>'
    })
}

imdb.config(["$stateProvider", "$urlRouterProvider", config]);