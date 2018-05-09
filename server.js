'use strict';

const cors = require('cors');
const express = require('express');
const app = express();
var port = process.env.PORT || 3000;
const pg = require('pg');
const fs = require('fs');
const conString = 'postgres://localhost:5432/locations';
const client = new pg.Client(conString);
client.connect();
client.on('error', error => {
  console.error(error);
});

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));

app.use(express.static('public'));

app.listen(port);



app.get('/test', (request, response) => {
  client.query('SELECT * FROM locations;')
    .then(result => {
      response.send(result.rows);
    })
    .catch(err => {
      console.error(err);
    });
});


/* next up is to "get" from the database on page load, parse to json, and store in local storage like the other "get" for the google sheets was doing. then search etc. will work as it did before */