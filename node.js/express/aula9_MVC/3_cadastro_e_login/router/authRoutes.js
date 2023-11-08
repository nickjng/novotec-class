const express = require('express')
const router = express.Router()

const authController = require('../controller/AuthController')

router.get('/', authController.login);
router.post('/login', authController.loginPost)
router.get('/register', authController.register)

router.post('/register', authController.registerPost)
router.post('/logout', authController.logout)


module.exports = router