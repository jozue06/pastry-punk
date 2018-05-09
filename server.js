'use strict';

// const cors = require('cors');
const express = require('express');
const app = express();
var port = process.env.PORT || 3001;

app.use(express.static('public'));

app.listen(port);