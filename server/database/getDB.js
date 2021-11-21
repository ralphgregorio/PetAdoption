const sql = require('./connectDB');

module.exports = {

    getData: (table, filter, callback) => {
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
    

    
}