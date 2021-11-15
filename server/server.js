'use strict';

const bodyParser = require("body-parser");
const e = require("express");
const express = require('express');
const path = require('path');
const create = require('./database/postDB');
const util = require('./database/utilityDB');


const PORT = 3030;
const app = express();
const HOST = '0.0.0.0';

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/createStaff', (req,res) => {
    if (!req.body.fname || !req.body.lname || !req.body.username
    || !req.body.password){
        console.log(`Empty body request in createStaff, post failed`);
        res.sendStatus(400);
    } else {
        util.exists("staff","username",req.body.username, (err, result) => {
            if (err || result == 1){
                console.log(`Staff already exists in table, post failed`);
                res.sendStatus(400);
            } else {
                create.createStaff(req.body.fname, 
                    req.body.lname,req.body.username,req.body.password);
                res.sendStatus(200);
            }
        })
    };
});

app.get('/', (req,res) => {
    res.send("test");
});

app.listen(PORT, HOST);
console.log("Up and running");