const express = require('express')
const router = express.Router();
const pool = require('../modules/pool.js');

router.get('/', function (req,res) {
    // console.log('in home GET route');
    const query = `SELECT "album"."id", "artist", "album", "release_date", "own_wish", "image_path", "genre_id", "genre"."genre" FROM "album" 
    JOIN "genre" ON "album"."genre_id" = "genre"."id";`;
    // const query = 'SELECT * FROM "album";';
    pool.query(query).then((results) => {
        // console.log('results from GET home listings', results);
        res.send(results.rows);
    }).catch((error) => {
        // console.log('error from GET home listings', error);
        res.sendStatus(500);
    });
});

router.get('/getGenre', function (req,res) {
    const genres = req.body;
    // console.log('in GET for /getGenre ', genres);
    const query = 'SELECT * FROM "genre";';
    pool.query(query).then((results) => {
        res.send(results.rows);
    }).catch((error) => {
        // console.log('error from /getGenre genre ', error);
        res.sendStatus(500);
    });
});

router.delete('/:id', function (req, res) {
    // console.log('in home DELETE route', req.params.id);
    const deleteThisRecord = req.params.id;
    const query = 'DELETE FROM "album" WHERE "id"=$1 RETURNING *;';
    pool.query (query, [deleteThisRecord]).then((results) => {
        // console.log(results.rows);
        res.sendStatus(201);
    }).catch((error) => {
        res.sendStatus(500);
    });
});

router.delete('/deleteGenre/:id', function (req, res) {
    console.log('in /deleteGenre/:id route', req.params.id);
    const genreId = req.params.id;
    const query = `DELETE FROM "genre" WHERE "genre"."id" NOT IN(SELECT "genre_id" FROM "album") AND "genre"."id" = $1 RETURNING *;`;
    pool.query (query, [genreId]).then((results) => {
        console.log('THIS IS WHAT WAS SENT FROM DELETE GENRE ROUTE',results.rows);
        res.send(results.rows);
    }).catch((error) => {
        res.sendStatus(500);
    });
});

router.post('/', function (req,res) {
    const albumToAdd = req.body;
    albumToAdd.genre_id = parseInt(albumToAdd.genre_id);
    if(albumToAdd.image_path == null || albumToAdd.image_path == "") {
        albumToAdd.image_path = 'https://www.catprotection.com.au/wp-content/uploads/2014/11/4913786-cat-m.jpg';
    }
    // console.log('in home POST route ', albumToAdd);
    const query = `INSERT INTO "album" ("artist", "album", "release_date", "own_wish", "image_path", "genre_id") 
    VALUES ($1, $2, $3, $4, $5, $6);`;
    pool.query(query, [albumToAdd.artist, albumToAdd.album, albumToAdd.release_date, albumToAdd.own_wish, albumToAdd.image_path, albumToAdd.genre_id]).then(() => {
        res.sendStatus(201);
    }).catch((error) => {
        res.sendStatus(500);
    });
});

router.post('/newGenre', (req, res) => {
    const genreToAdd = req.body;
    console.log('in music/newGenre post for new genre', genreToAdd);
    const query = `INSERT INTO "genre" ("genre")
    VALUES ($1);`;
    pool.query(query, [genreToAdd.genre]).then(() => {
        res.sendStatus(201);
    }).catch((error) => {
        res.sendStatus(500);
    });
});















module.exports = router;