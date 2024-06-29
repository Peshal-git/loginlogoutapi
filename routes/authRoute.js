const express = require('express')
const router = express.Router()

router.use(express.json())

const bodyParser = require('body-parser')
const { passwordStrengthValidator } = require('../helpers/validation')

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))

const userController = require('../controllers/userController')

router.get('/mail-verification', userController.mailVerification)

router.get('/reset-password', userController.resetPassword)
router.post('/reset-password', passwordStrengthValidator, userController.updatePassword)

router.get('/reset-success', userController.resetSuccess)
module.exports = router