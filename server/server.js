'use strict';

const bodyParser = require("body-parser");
const express = require('express');
const path = require('path');
var mysql = require('mysql');
const port = 8080;
const app = express();
const HOST = '0.0.0.0';

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, './pages/index.html'));
  });

app.listen(port, HOST);
console.log("Up and running");