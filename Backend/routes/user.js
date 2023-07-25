const path = require('path');

const express = require('express');

const userController = require('../controllers/user');

const router = express.Router();

// add-user => POST

router.post('/add-user', userController.postAddUser);

// get-users => GET

router.get('/get-users', userController.getUsers);

// delete-user => DELETE

router.delete('/delete-user/:id', userController.deleteUser);


module.exports = router;
