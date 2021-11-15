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
        let insert = `INSERT INTO staff (fname, lname, username, password) 
        VALUES ('${fname}','${lname}','${username}','${pass}')`
        sql.query(insert, (err, result) => {
            if (err){
                console.log(`creating staff error: ${err}`);
            } else {
                console.log('successful creation of staff in table');
            }
        });
    }

    
}