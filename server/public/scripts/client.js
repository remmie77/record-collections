console.log('JS');

const myApp = angular.module( 'myApp', [ 'ngRoute', 'angular.filter' ] );

myApp.config( function( $routeProvider ){
    console.log('YASSSS MAAATE!!!!');
    
    $routeProvider.when( '/', {
        templateUrl: 'views/music.html',
        controller:'MusicController as mc'
    }) 
    .when( '/genre', {
        templateUrl: 'views/genre.html',
        controller: 'GenreController as gc'
    }) 
    .otherwise({
        // redirectTo: '/'
        template: '<h2>404 not working</h2>'
    }); 
}); 