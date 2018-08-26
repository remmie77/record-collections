myApp.controller('MusicController', function ($http) {
    console.log('MusicController hit');
    let mc = this;
    mc.records = [];
    mc.genre = [];

    mc.getAlbums = function () {
        mc.records = [];
        console.log('in getAlbums');
        $http({
            method: 'GET',
            url: '/music' //this has to match with route in 
        }).then(function (response) {
            console.log('MusicController - GET - response', response.data);
            mc.records = response.data;
            console.log('mc.records', mc.records);            
        }).catch(function (error) {
            console.log('error in GET album', error);
        });
    };

    mc.getGenre = function () {
        mc.genre = [];
        console.log('in getAlbums');
        $http({
            method: 'GET',
            url: '/music/getGenre' //this has to match 
        }).then(function (response) {
            console.log('MusicController - GET - response', response.data);
            mc.genre = response.data;
            console.log('mc.genre', mc.genre);            
        }).catch(function (error) {
            console.log('error in GET genre', error);
        });
    };

    mc.deleteAlbum = function (id) {
        console.log('MusicController - DELETE - id of album to delete: ', id);
        $http({
            method: 'DELETE',
            url: '/music/' + id
        }).then(function (response) {
            console.log(response);
            mc.getAlbums();
        }).catch(function (error) {
            console.log('MusicController - DELETE - error ', error);
        });
    };

    mc.addAlbum = function (record) {
        console.log('MusicController in addAlbum  - POST - record to add ', record);
        $http({
            method: 'POST',
            url: '/music',
            data: record
        }).then(function (response) {
            console.log('MusicController - addAlbum - response', response.data);
            mc.getAlbums();
            mc.albumToAdd = {};
        }).catch(function (error) {
            console.log('MusicController - POST - error ', error);
        });
    };


    mc.getAlbums();
    mc.getGenre();
});//end

    // mc.addAlbum