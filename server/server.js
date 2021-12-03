'use strict';

const bodyParser = require("body-parser");
const express = require('express');
const path = require('path');
const create = require('./database/postDB');
const del = require('./database/deleteDB');
const util = require('./database/utilityDB');
const update = require('./database/updateDB');
const gettable = require('./database/getDB')
const cors = require('cors')

const PORT = 3030;
const app = express();
const HOST = '0.0.0.0';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

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

app.get('/api/search/:table/:column/:search', (req,res) => {
    let filter = req.query.orderby;
    if (!req.query.orderby){
        filter = "asc";
    }
    gettable.search(req.params.table, 
        req.params.column, req.params.search, filter, (err, result) => {
            if (err){
                res.send(err);
            } else {
                res.send(result);
            }

    })
});

app.get('/api/getParents', (req,res) => {
    gettable.getRelated((err, result) => {
        if (err){
            res.send(err);
        } else {
            res.send(result);
        }
    });
});


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

// To test curl -d "fname=ralph&lname=gregorio&email=test@gmail.com&petID=21" -X POST http://localhost:3030/api/createUser
app.post('/api/createUser', (req,res) => {
    if (!req.body.fname || !req.body.lname || !req.body.email
    || !req.body.petID){
        console.log(`Empty body request in createUser, post failed`);
        res.sendStatus(400);
    } else {
        create.createUser(req.body.fname,req.body.lname,
            req.body.email,req.body.petID);
        update.updatePets(req.body.petID, "adopted", "1");
        res.sendStatus(200);
    };
});

app.post('/login', (req,res) => {
    util.authenticate(req.body.user, req.body.pass, (err,result) => {
        if (result === true){
            res.sendStatus(200)
        } else {
            res.sendStatus(401)
        }
    })
    
   
})

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

app.delete('/api/:table', (req,res) => {
    console.log(req.params.table);
    if (req.params.table === "user" || req.params.table === "staff"){
        let fname = req.body.fname;
        let lname = req.body.lname;
        del.deleteUserOrStaff(req.params.table, fname, lname);
        res.sendStatus(200);
    } else if (req.params.table === "pet"){
        let pname = req.body.pet_name;
        let breed = req.body.breed;
        let age = req.body.age;
        del.deletePet(pname,age,breed);
        res.sendStatus(200);
    } else {
        res.sendStatus(404);
    }

});

app.delete('/api/:table/:id', (req,res) => {
    del.deleteById(req.params.table,req.params.id, (err, result) => {
        if (err){
            res.sendStatus(404);
        } else {
            res.sendStatus(200);
        }
    })
});

app.put('/api/updateStaff/:id', (req,res) => {
    util.exists("staff","username",req.body.username, (err, result) => {
        if (err || result == true){
            let targetColumn = req.body.targetCol;
            let updateval = req.body.updateVal;
            update.updateStaff(req.params.id, targetColumn, updateval);
            res.sendStatus(200);
        } else {
            console.log(`Staff does not exists in staff table, update failed`);
            res.sendStatus(400);
        
        }
    })
});

app.put('/api/updateUser/:id', (req,res) => {
    util.exists("user","fname",req.body.fname, (err, result) => {
        if (err || result == true){
            let targetColumn = req.body.targetCol;
            let updateval = req.body.updateVal;
            update.updateUsers(req.params.id, targetColumn, updateval);
            res.sendStatus(200);
        } else {
            console.log(`User does not exists in user table, update failed`);
            res.sendStatus(400);
        
        }
    })
});

app.put('/api/updatePets/:id', (req,res) => {
    util.exists("pet","pname",req.body.pname, (err, result) => {
        if (err || result == true){
            let targetColumn = req.body.targetCol;
            let updateval = req.body.updateVal;
            update.updatePets(req.params.id, targetColumn, updateval);
            res.sendStatus(200);
        } else {
            console.log(`The given pet does not exists in pet table, update failed`);
            res.sendStatus(400);
        
        }
    })
});


app.get('/', (req,res) => {
    res.send("Server up");
});

app.listen(PORT, HOST);
console.log("Up and running");