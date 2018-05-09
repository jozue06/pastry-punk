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


// REVIEW: This helper function will load authors into the DB if the DB is empty.
function loadLocations() {
  fs.readFile('./public/data/stores.json', 'utf8', (err, fd) => {
    JSON.parse(fd).forEach(ele => {
      console.log(ele.name);
      client.query(

        'INSERT INTO locations (name, neighborhood, locationtype, globalinfluence, "website", hours, address, phone, "maptag", img, "mainpic", "minitop", "minibottom", blurb, pastry, item ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16) ON CONFLICT DO NOTHING;',

        [ele.name,
          ele.neighborhood,
          ele.locationtype,
          ele.globalinfluence,
          ele.website,
          ele.hours,
          ele.address,
          ele.phone,
          ele.maptag,
          ele.img,
          ele.mainpic,
          ele.minitop,
          ele.minibottom,
          ele.blurb,
          ele.pastry,
          ele.item
        ]
      );
    });
  });
}


function loadDB() {
  client.query(`
      CREATE TABLE IF NOT EXISTS
      locations (
        name VARCHAR (255),
        neighborhood VARCHAR(255), 
        locationtype VARCHAR(255), 
        globalinfluence VARCHAR(255), 
        "website" VARCHAR (255), 
        hours VARCHAR (255), 
        address VARCHAR (255), 
        phone VARCHAR (255), 
        "maptag" VARCHAR, 
        img VARCHAR (255), 
        "mainpic" VARCHAR (255), 
        "minitop" VARCHAR (255), 
        "minibottom" VARCHAR (255), 
        blurb text, 
        pastry text, 
        item text
      );`
  )
    .then(console.log('stuff happend'))
    .then(data => {
      loadLocations(data);
    })
    .catch(err => {
      console.error(err);
    });
}

loadDB();