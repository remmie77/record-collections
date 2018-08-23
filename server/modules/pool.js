const pg = require('pg');
const Pool = pg.Pool;
const config = {
  database: 'record_collections', // the name of the database
  host: 'localhost', // where is your database
  port: 5432, // the port number for your database, 5432 is the default
  max: 10, // how many connections at one time
  idleTimeoutMillis: 30000 // 30 seconds to try to connect
};

// one instance to rule them all!
const pool = new Pool(config);

pool.on('connect', (client) => {
  console.log('pg connected');
})

pool.on('error', (error, client) => {
  console.log('Unexpected error on idle pg client', error);
  process.exit(-1);
});

module.exports = pool;