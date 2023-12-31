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

    /**
     * Creates user in user table in projectDatabase sql
     * @param {String} fname First name of user
     * @param {String} lname Last name of user
     * @param {String} email Email of user
     * @param {Number} petID Integer ID of pet
     */
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
    
    /**
     * Creates pet in pet table in projectDatabase sql
     * @param {String} pname Name of pet
     * @param {Number} age Age of pet
     * @param {String} desc Description of pet
     * @param {String} breed Breed of pet
     * @param {String} url Direct url to pet image
     * @param {Boolean} adopted true if adopted, otherwise false
     */
    createPet: (pname, age, desc, breed, url, adopted) => {
        if (adopted == true || adopted === "true"){
            adopted = 1
        } else {
            adopted = 0
        }

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