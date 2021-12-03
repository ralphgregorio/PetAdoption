const sql = require('./connectDB');

module.exports = {

    /**
     * Checks if value exists in table, returns true if exists otherwise false is returned
     * @param {String} table Table in current database
     * @param {String} column Column in table
     * @param {String} value Value in column
     * @param {Function} callback Callback function returns result (err, result), result is a boolean
     */
    exists: (table, column, value, callback) => {
        let filter = `SELECT * FROM ${table} WHERE ${column}='${value}'`
        sql.query(filter, (err, result) => {
            if (err){
                console.log("SQL error in exists function: "+err);
                callback(err, null);
            } else {
                if (result.length == 0){
                    callback(null, false);
                } else {
                    callback(null, true);
                }
            }
        });
    },
    authenticate: (user, pass, callback) => {
        let filter = `SELECT * FROM staff WHERE username=('${user}') AND pass=('${pass}')`
        sql.query(filter, (err, result) => {
            if (err){
                console.log("SQL error in exists function: "+err);
                callback(err, null);
            } else {
                if (result.length == 0){
                    callback(null, false);
                } else {
                    callback(null, true);
                }
            }
        });
    }

    
}