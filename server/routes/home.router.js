const express = require('express')
const router = express.Router();
const pool = require('../modules/pool.js');

router.get('/', function (req,res) {
    console.log('in home GET route');
    const query = 'SELECT * FROM "album";';
    pool.query(query).then((results) => {
        // console.log('results from GET home listings', results);
        res.send(results.rows);
    }).catch((error) => {
        console.log('error from GET home listings', error);
        res.sendStatus(500);
    });
});

router.delete('/:id', function (req,res) {
    console.log('in home DELETE route', req.params.id);
    const deleteThisRecord = req.params.id;
    const query = 'DELETE FROM "album" WHERE "id"=$1 RETURNING *;';
    pool.query (query, [deleteThisRecord]).then((results) => {
        console.log(results.rows);
        res.sendStatus(201);
    }).catch((error) => {
        res.sendStatus(500);
    });
});

router.post('/', function (req,res) {
    const albumToAdd = req.body;
    console.log('in home POST route ', albumToAdd);
    const query = 'INSERT INTO "album" ("artist", "album", "release_date", "own_wish", "image_path", "genre_id") VALUES ($1, $2, $3, $4, $5, $6);';
    pool.query(query, [albumToAdd.artist, albumToAdd.album, albumToAdd.release_date, albumToAdd.own_wish, albumToAdd.image_path, albumToAdd.genre_id]).then(() => {
        res.sendStatus(201);
    }).catch((error) => {
        res.sendStatus(500);
    });
});














module.exports = router;