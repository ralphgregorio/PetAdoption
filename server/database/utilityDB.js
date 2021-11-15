const sql = require('./connectDB');

module.exports = {

    /**
     * Checks if value exists in table, returns 1 if true otherwise 0 if false
     * @param {String} table Table in current databse
     * @param {String} column Column in table
     * @param {String} value Value in column
     * @param {String} callback Callback function returns result (err, result)
     */
    exists: (table, column, value, callback) => {
        let filter = `SELECT * FROM ${table} WHERE ${column}='${value}'`
        sql.query(filter, (err, result) => {
            if (err){
                console.log("SQL error in exists function: "+err);
                callback(err, null);
            } else {
                if (result.length == 0){
                    callback(null, 0);
                } else {
                    callback(null, 1);
                }
            }
        });
    }

    
}