const sql = require('./connectDB');

module.exports = {

    /**
     * Gets all values from specified table with filter options
     * @param {String} table Table to grab values from
     * @param {Object} filter filter options are col={columnName}, adopted={true/false}, and order={asc/desc}.
     * @param {err,result} callback Callback function returns err result
     */
    getAll: (table, filter, callback) => {
        let query;
        query = `SELECT * FROM ${table} `
        if (table === "pet" && filter.adopted != "undefined"){
            let bool;
            if (filter.adopted === "true"){
                bool = 1;
            } else {
                bool = 0;
            }
            query += ` WHERE adopted='${bool}'`
        }
        if (filter.col != "undefined"){
            query += ` ORDER BY ${filter.col}`
        }
        if (filter.order != "undefined"){
            query += ` ${filter.order}`
        }
        sql.query(query, (err, result) => {
            if (err){
                console.log(`Error in getting from ${table}: ${err}`);
                callback(err,null);
            } else {
                console.log(`Get success for ${table} table`);
                callback(null,result);
            }
        });
    },


    /**
     * Joins user and pet table for users that has adopted a pet
     * @param {Function} callback Callback function returns err result
     */
     getRelated: (callback) => {
        let query = `SELECT user.id, user.adopted_pet_id, user.fname, user.lname, user.email, pet.pet_name, pet.age, pet.breed, user.timestamp`;
        query += ` FROM pet INNER JOIN user ON user.adopted_pet_id=pet.id`;
        sql.query(query, (err, result) => {
            if (err){
                console.log(`Error in getting from related tables: ${err}`);
                callback(err,null);
            } else {
                console.log(`Get success for related tables`);
                callback(null,result);
            }
        });

    },

    /**
     * Searches database by character
     * @param {String} table table to search
     * @param {String} col where to search
     * @param {String} target search characters
     * @param {String} order Order by asc/desc
     * @param {Function} callback Callback function returns err result
     */
    search: (table, col, target, order, callback) => {
        let query = `SELECT * FROM ${table} WHERE ${col} LIKE '%${target}%' ORDER BY ${col} ${order}`;
        sql.query(query, (err, result) => {
            if (err){
                console.log(`Error in searching for ${target}: ${err}`);
                callback(err,null);
            } else {
                console.log(`Success in searching ${target}`);
                callback(null,result);
            }
        });

    }
    

    
}