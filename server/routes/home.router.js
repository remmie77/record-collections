const express = require('express')
const router = express.Router();
const pool = require('../modules/pool.js');

router.get('/', function(req,res) {
    console.log('in home GET route');
    const query = 'SELECT * FROM "album";';
    pool.query(query).then((results) => {
        // console.log('results from GET home listings', results);
        res.send(results.rows);
    }).catch((error) => {
        console.log('error from GET home listings', error);
        res.sendStatus(500);
    })
})










module.exports = router;