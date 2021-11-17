const sql = require('./connectDB');

module.exports = {

    /**
     * Creates staff in staff table in projectDatabase sql
     * @param {String} fname First name of staff
     * @param {String} lname Last name of staff
     * @param {String} username Username of staff account
     * @param {String} pass Password for staff account
     */
    createStaff: (fname, lname, username, pass) => {
        let insert = `INSERT INTO staff (fname, lname, username, pass) 
        VALUES ('${fname}','${lname}','${username}','${pass}')`
        sql.query(insert, (err, result) => {
            if (err){
                console.log(`creating staff error: ${err}`);
            } else {
                console.log('successful creation of staff in table');
            }
        });
    },

    createUser: (fname, lname, email, petID) => {
        let date = new Date()
        date = date.toISOString()
        let insert = `INSERT INTO user (fname, lname, email, adopted_pet_id, timestamp) 
        VALUES ('${fname}','${lname}','${email}','${petID}','${date}')`
        sql.query(insert, (err, result) => {
            if (err){
                console.log(`creating user error: ${err}`);
            } else {
                console.log('successful creation of user in table');
            }
        });
    },

    createPet: (pname, age, desc, breed, url, adopted) => {
        let insert = `INSERT INTO pet (pet_name, age, description, breed, url, adopted) 
        VALUES ('${pname}','${age}','${desc}','${breed}','${url}','${adopted}')`
        sql.query(insert, (err, result) => {
            if (err){
                console.log(`creating pet error: ${err}`);
            } else {
                console.log('successful creation of pet in table');
            }
        });
    }

    

    
}