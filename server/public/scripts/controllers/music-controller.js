myApp.controller('MusicController', function ($http) {
    console.log('MusicController hit');
    let mc = this;
    mc.records = [];

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


    mc.getAlbums();

});//end

    // mc.addAlbum