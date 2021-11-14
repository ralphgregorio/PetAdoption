'use strict';

const bodyParser = require("body-parser");
const express = require('express');
const path = require('path');
const PORT = 8080;
const app = express();
const HOST = '0.0.0.0';

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req,res) => {
    res.send("test");
});

app.listen(PORT, HOST);
console.log("Up and running");