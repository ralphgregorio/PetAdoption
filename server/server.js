'use strict';

const bodyParser = require("body-parser");
const e = require("express");
const express = require('express');
const path = require('path');
const create = require('./database/postDB');
const del = require('./database/deleteDB');
const util = require('./database/utilityDB');
const gettable = require('./database/getDB')

const PORT = 3030;
const app = express();
const HOST = '0.0.0.0';

app.use(bodyParser.urlencoded({ extended: true }));

// To test curl -d "fname=ralph&lname=gregorio&username=hiiii&pass=123" -X POST http://localhost:3030/api/createStaff
app.post('/api/createStaff', (req,res) => {
    if (!req.body.fname || !req.body.lname || !req.body.username
    || !req.body.pass){
        console.log(`Empty body request in createStaff, post failed`);
        res.sendStatus(400);
    } else {
        util.exists("staff","username",req.body.username, (err, result) => {
            if (err || result == true){
                console.log(`Staff already exists in table, post failed`);
                res.sendStatus(400);
            } else {
                create.createStaff(req.body.fname, 
                    req.body.lname,req.body.username,req.body.pass);
                res.sendStatus(200);
            
            }
        })
    };
});

app.get('/api/get/:table', (req,res) => {
    const filter = {col:`${req.query.column}`, order:`${req.query.orderby}`, adopted:`${req.query.adopted}`}
    gettable.getAll(req.params.table,filter, (err, result) => {
        if (err){
            res.send(err);
        } else {
            res.send(result);
        }
    });
});

// To test curl -d "fname=ralph&lname=gregorio&email=test@gmail.com&petID=21" -X POST http://localhost:3030/api/createUser
app.post('/api/createUser', (req,res) => {
    if (!req.body.fname || !req.body.lname || !req.body.email
    || !req.body.petID){
        console.log(`Empty body request in createUser, post failed`);
        res.sendStatus(400);
    } else {
        create.createUser(req.body.fname,req.body.lname,
            req.body.email,req.body.petID);
        res.sendStatus(200);
    };
});

// To test curl -d "pname=Bruno&age=2&desc=A+Cool+Breed&breed=German+Shepherd&url=http://gago.com/ulol.jpg&adopted=true" -X POST http://localhost:3030/api/createPet
app.post('/api/createPet', (req,res) => {
    if (!req.body.pname || !req.body.age || !req.body.desc
    || !req.body.breed || !req.body.url || !req.body.adopted){
        console.log(`Empty body request in createPet, post failed`);
        res.sendStatus(400);
    } else {
        create.createPet(req.body.pname,req.body.age,req.body.desc,
            req.body.breed,req.body.url,req.body.adopted);
        res.sendStatus(200);
    };
});

app.delete('/test', (req,res) => {
    del.deleteStaff("rootstaff","admin")

})
app.get('/', (req,res) => {
    res.send("test");
});

app.listen(PORT, HOST);
console.log("Up and running");