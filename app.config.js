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

    .state('/movie-details/',{
        url: '/movie-list/:id',
        template: '<movie-details></movie-details>'
    })

    .state('/add-movies', {
        url: '/add-movies',
        template: '<add-movies></add-movies>'
    })
}

imdb.config(["$stateProvider", "$urlRouterProvider", config]);