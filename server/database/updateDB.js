const sql = require('./connectDB');

module.exports = {

    /**
     * updates staff in staff table in projectDatabase sql
     * @param {int} id staff 'id' number
     * @param {String} targetCol the target column in the table to update/change
     * @param {String} updateVal the value to be updated in the target column of the table
     */
     updateStaff: (id, targetCol, updateVal) => {
        if(targetCol == "fname") 
        {
            let updates = `UPDATE staff SET fname = '${updateVal}' WHERE id = '${id}'`; // not sure how to access id to be int
            sql.query(updates, (err, result) => {
                if (err){
                    console.log(`updating staff error: ${err}`);
                } else {
                    console.log('successful changes in the staff table');
                }
            });
        } else if (targetCol == "lname") 
        {
            let updates = `UPDATE staff SET lname = '${updateVal}' WHERE id = '${id}'`; // not sure how to access id to be int
            sql.query(updates, (err, result) => {
                if (err){
                    console.log(`updating staff error: ${err}`);
                } else {
                    console.log('successful changes in the staff table');
                }
            });
        }else if (targetCol == "username") 
        {
            let updates = `UPDATE staff SET username = '${updateVal}' WHERE id = '${id}'`; // not sure how to access id to be int
            sql.query(updates, (err, result) => {
                if (err){
                    console.log(`updating staff error: ${err}`);
                } else {
                    console.log('successful changes in the staff table');
                }
            });
        } else if (targetCol == "pass") 
        {
            let updates = `UPDATE staff SET pass = '${updateVal}' WHERE id = 'id'`; // not sure how to access id to be int
            sql.query(updates, (err, result) => {
                if (err){
                    console.log(`updating staff error: ${err}`);
                } else {
                    console.log('successful changes in the staff table');
                }
            });
        }


            },



    /**
     * updates users in USER table in projectDatabase sql
     * @param {int} id user 'id' number
     * @param {String} targetCol the target column in the table to update/change
     * @param {String} updateVal the value to be updated in the target column of the table
     */
  updateUsers: (id, targetCol, updateVal) => {
    if(targetCol == "fname") 
    {
        let updates = `UPDATE user SET fname = '${updateVal}' WHERE id = '${id}'`; // not sure how to access id to be int
        sql.query(updates, (err, result) => {
            if (err){
                console.log(`updating user error: ${err}`);
            } else {
                console.log('successful changes in the user table');
            }
        });
    } else if (targetCol == "lname") 
    {
        let updates = `UPDATE user SET lname = '${updateVal}' WHERE id = '${id}'`; // not sure how to access id to be int
        sql.query(updates, (err, result) => {
            if (err){
                console.log(`updating user error: ${err}`);
            } else {
                console.log('successful changes in the user table');
            }
        });
    }else if (targetCol == "email") 
    {
        let updates = `UPDATE user SET email = '${updateVal}' WHERE id = '${id}'`; // not sure how to access id to be int
        sql.query(updates, (err, result) => {
            if (err){
                console.log(`updating user error: ${err}`);
            } else {
                console.log('successful changes in the user table');
            }
        });
    }
        },



    /**
     * updates pets in PETS table in projectDatabase sql
     * @param {int} id user 'id' number
     * @param {String} targetCol the target column in the table to update/change
     * @param {String} updateVal the value to be updated in the target column of the table
     */
  updatePets: (id, targetCol, updateVal) => {
    if(targetCol == "pet_name") 
    {
        let updates = `UPDATE pet SET pet_name = '${updateVal}' WHERE id = '${id}'`; // not sure how to access id to be int
        sql.query(updates, (err, result) => {
            if (err){
                console.log(`updating pets error: ${err}`);
            } else {
                console.log('successful changes in the pets table');
            }
        });
    } else if (targetCol == "age") 
    {
        let updates = `UPDATE pet SET age = '${updateVal}' WHERE id = '${id}'`; // not sure how to access id to be int
        sql.query(updates, (err, result) => {
            if (err){
                console.log(`updating pets error: ${err}`);
            } else {
                console.log('successful changes in the pets table');
            }
        });
    }else if (targetCol == "description") 
    {
        let updates = `UPDATE pet SET description = '${updateVal}' WHERE id = '${id}'`; // not sure how to access id to be int
        sql.query(updates, (err, result) => {
            if (err){
                console.log(`updating pets error: ${err}`);
            } else {
                console.log('successful changes in the pets table');
            }
        });
    }else if (targetCol == "breed") 
    {
        let updates = `UPDATE pet SET breed = '${updateVal}' WHERE id = '${id}'`; // not sure how to access id to be int
        sql.query(updates, (err, result) => {
            if (err){
                console.log(`updating pets error: ${err}`);
            } else {
                console.log('successful changes in the pets table');
            }
        });
    }else if (targetCol == "url") 
    {
        let updates = `UPDATE pet SET url = '${updateVal}' WHERE id = '${id}'`; // not sure how to access id to be int
        sql.query(updates, (err, result) => {
            if (err){
                console.log(`updating pets error: ${err}`);
            } else {
                console.log('successful changes in the pets table');
            }
        });
    }else if (targetCol == "adopted") 
    {
        let updates = `UPDATE pet SET adopted = '${updateVal}' WHERE id = '${id}'`; // not sure how to access id to be int
        sql.query(updates, (err, result) => {
            if (err){
                console.log(`updating pets error: ${err}`);
            } else {
                console.log('successful changes in the pets table');
            }
        });
    }
        },



    
}