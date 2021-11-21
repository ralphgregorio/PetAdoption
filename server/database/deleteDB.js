const sql = require('./connectDB');

module.exports = {

    /**
     * Deletes staff in staff table in projectDatabase sql
     * @param {String} fname First name of staff
     * @param {String} lname Last name of staff
     * @param {String} username Username of staff account
     * @param {String} pass Password for staff account
     */
   deleteStaff: (fname,lname) => {
       let deletestaff = `DELETE FROM staff where fname = ('${fname}') AND lname=('${lname}')`
        sql.query(deletestaff, (err, result) => {
            if (err){
                console.log(`delete staff error: ${err}`);
            } else {
                console.log('successful deletion of staff in table');
            }
        });
    },
    
    
       /**
     * Deletes pet in pet table in projectDatabase sql
     * @param {String} petname name of Pet
     */
   deletePet: (pet_name,age,breed) => {
        
         let deletepet = `DELETE FROM pets WHERE pet_name=('${pet_name}') AND age=('${age}') AND breed=('${breed}')`
        sql.query(deletepet, (err, result) => {
            if (err){
                console.log(`delete pet error: ${err}`);
            } else {
                console.log('successful deletion of pet in table')
            }
        });
    },
    
    
    
          /**
     * Deletes user(adoptive owner) in projectDatabase sql
     * @param {String} name name of Pet
     */
   deleteUser: (fname,lname) => {
        
         let deleteuser = `DELETE FROM users WHERE fname=('${fname}') AND lname=('${lname}')`
        sql.query(deleteuser, (err, result) => {
            if (err){
                console.log(`delete user error: ${err}`);
            } else {
                console.log('successful deletion of user in table');
            }
        });
    }

    
}