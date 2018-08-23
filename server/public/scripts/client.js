console.log('JS');

const myApp = angular.module( 'myApp', [ 'ngRoute' ] );

myApp.config( function( $routeProvider ){
    $routeProvider.when( '/', {
        templateUrl: 'views/music.html',
        controller:'MusicController as mc'
    }) 
    .when( '/rental', {
        templateUrl: 'views/genre.html',
        controller: 'GenreController as gc'
    }) 
    .when( '/sales', {
        templateUrl: 'views/wish.html',
        controller: 'WishController as wc'
    }) 
    .otherwise({
        redirectTo: '/'
    }) 
}) 