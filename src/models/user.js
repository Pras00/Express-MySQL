// Database
const dbPool = require('../config/database.js');


// CREATE - POST Method
const createNewUsers = (body) => {
    const sqlQuery = `INSERT INTO user (username, password, role) VALUES ('${body.username}', '${body.password}', '${body.role}')`;
    return dbPool.execute(sqlQuery);
}
 
 
// READ - GET Method
const getAllUsers = () => {
    const sqlQuery = 'SELECT * FROM user';
    return dbPool.execute(sqlQuery);
}


// UPDATE - PATH Method
const updateUsers = (body, idUser) => {
    const sqlQuery = `UPDATE user SET username='${body.username}', password='${body.password}', role='${body.role}' WHERE id=${idUser}`
    return dbPool.execute(sqlQuery);
}


// DELETE Method
const deleteUsers = (idUser) => {
    const sqlQuery = `DELETE FROM user WHERE id=${idUser}`;
    return dbPool.execute(sqlQuery);
}



module.exports = {
    getAllUsers,
    createNewUsers,
    updateUsers,
    deleteUsers
}