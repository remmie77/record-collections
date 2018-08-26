myApp.controller('GenreController', function ($http) {
    console.log('GenreController hit');
    let gc = this;
    gc.genres = [];

    gc.getGenres = function () {
        gc.genres = [];
        console.log('in getGenres');
        $http({
            method: 'GET',
            url: '/music/getGenre' //this has to match 
        }).then(function (response) {
            console.log('GenreController - GET - response', response.data);
            gc.genres = response.data;
            console.log('gc.genres ', gc.genres);            
        }).catch(function (error) {
            console.log('error in GET genres', error);
        });
    }

    gc.addGenre = function (genre) {
        console.log('in addGenre');
        $http({
            method: 'POST',
            url: '/music/newGenre',
            data: genre 
        }).then(function (response) {
            console.log('GenreController - addGenre - response', response.data);
            gc.getGenres();
            gc.genre = {};
        }).catch(function (error) {
            console.log('GenreController - POST - error ', error);
        });
    };
   

    gc.getGenres();
});