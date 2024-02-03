const express = require('express')
const { getAllUsers, registerController, loginController } = require('../controllers/userController')

//router object
const router = express.Router()

//Get all users ||GET
router.get('/all-users', getAllUsers )

//CREATE USER || POST
router.post('/register', registerController)

//LOGIN || POST
router.post('/login', loginController);

module.exports = router