require('dotenv').config();
const { Client } = require('pg');
const pg = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV ? true : false,
});
pg.connect();
pg.query(`CREATE TABLE access_token(access_token TEXT, expires_on NUMERIC); INSERT INTO access_token (access_token, expires_on) VALUES ('', '1');`, (error, results) => {
  if(error) {
    console.log(error);
  } else {
    console.log(results);
  }
  pg.end();
})
