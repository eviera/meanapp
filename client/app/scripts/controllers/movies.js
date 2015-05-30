'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MoviesCtrl
 * @description
 * # MoviesCtrl
 * Controller of the clientApp
 */
 angular.module('clientApp')
 .controller('MoviesCtrl', function ($scope, Movie) {  //La factory Movie esta declarado en app.js
   $scope.movies = $scope.movies = Movie.getList().$object; //Hace la llamada a getList, y cuando vuelve, copia las cosas a $object... y de alguna manera se le asigna a movies
 });
