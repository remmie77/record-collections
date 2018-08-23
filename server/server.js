const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const homeRouter = require('./routes/home.router.js');


const pg = require('pg');


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()); // This line is for angular
app.use(express.static('server/public'));



app.use('/home', homeRouter);


app.listen(PORT, () => {
    console.log(`myApp is running on port: ${PORT}`);
});

