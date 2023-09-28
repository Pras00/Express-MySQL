// Models
const userModel = require('../models/user');


// CREATE - POST Method
const createNewUsers = async (req, res) => {
    const {body} = req;
    try {
        await userModel.createNewUsers(body);
        res.json({
            message: "CREATE new Users success",
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error,
        })
    }
}

// READ - GET Method
const getAllUsers = async (req, res) => {
    // User models
    const [data] = await userModel.getAllUsers();
    try {
        res.json({
            message: "GET all Users success",
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error,
        })
    }
}

// UPDATE - PATH Method
const updateUsers = async (req, res) => {
    const {idUser} = req.params;
    const {body} = req;
    try {
        await userModel.updateUsers(body, idUser)
        res.json({
            message: "UPDATE user success",
            data: {
                id: idUser,
                ...body
            },
        })
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error,
        })
    }
}

// DELETE Method 
const deleteUsers = async (req, res) => {
    const {idUser} = req.params;
    try {
        await userModel.deleteUsers(idUser);
        res.json({
            message: "DELETE user success"
        })
    } catch (error) {
        res.json({
            message: "Erver Error",
            serverMessage: error,
        })
    }
}


module.exports = {
    getAllUsers, 
    createNewUsers,
    updateUsers,
    deleteUsers
}