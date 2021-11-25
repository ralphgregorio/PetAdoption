const sql = require('./connectDB');

module.exports = {

    /**
     * Deletes staff in staff table in projectDatabase sql
     * @param {String} fname First name of staff
     * @param {String} lname Last name of staff
     * @param {String} username Username of staff account
     * @param {String} pass Password for staff account
     */
   deleteUserOrStaff: (table,fname,lname) => {
        let deletestaff = `DELETE FROM ${table} where fname = ('${fname}') AND lname=('${lname}')`
        sql.query(deletestaff, (err, result) => {
            if (err){
                console.log(`delete ${table} error: ${err}`);
            } else {
                console.log(`successful deletion of ${table} in table`);
            }
        });
    },
    
    /**
     * Deletes pet in pet table in projectDatabase sql
     * @param {String} pet_name name of Pet
     * @param {Integer} age Age of Pet
     * @param {String} breed Breed of pet
     */
   deletePet: (pet_name,age,breed) => {
        
        let deletepet = `DELETE FROM pet WHERE pet_name=('${pet_name}') AND age=('${age}') AND breed=('${breed}')`
        sql.query(deletepet, (err, result) => {
            if (err){
                console.log(`delete pet error: ${err}`);
            } else {
                console.log('successful deletion of pet in table')
            }
        });
    },
    
    /**
     * Deletes by id
     * @param {String} table table name
     * @param {String} id  id to delete
     * @param {Function} callback err, result callback
     */
    deleteById: (table, id, callback) => {
        let deletesql = `DELETE FROM ${table} WHERE id=('${id}')`
        sql.query(deletesql, (err, result) => {
            if (err){
                console.log(`delete ${table} error: ${err}`);
                callback(err,null);
            } else {
                console.log(`successful ${table} of pet in table`);
                callback(null,result);
            }
        });

    }
    
   
    
}