const express = require('express');
const router = express.Router();

// Controller
const userController = require('../controller/user.js');

// CREATE - POST Method
router.post('/', userController.createNewUsers);
// READ - GET Method
router.get('/', userController.getAllUsers);
// UPDATE - PATH Method
router.patch('/:idUser', userController.updateUsers);
// DELETE Method
router.delete('/:idUser',userController.deleteUsers);


module.exports = router;