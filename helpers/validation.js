const { check } = require('express-validator')
exports.registerValidator = [
    check('firstname', 'Name is required').not().isEmpty(),
    check('lastname', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail().normalizeEmail({
        gmail_remove_dots: true
    }),
    check('password', 'Password must have more than 6 characters, and must contain at least one uppercase letter, one lowercase letter, one special character, and one number').isStrongPassword({
        minLength: 6,
        minUppercase: 1,
        minLowercase: 1,
        minNumbers: 1,
        minSymbols: 1
    }),
    check('dob', 'Date must be in correct format yyyy-mm-dd').isISO8601().isLength({
        min: 10,
        max: 10
    }),
    check('mobile', 'Mobile number should contain 9 digits').isLength({
        min: 10,
        max: 10
    }),
]

exports.sendMailVerificationValidator = [
    check('email', 'Please include a valid email').isEmail().normalizeEmail({
        gmail_remove_dots: true
    }),

]

exports.passwordResetValidator = [
    check('email', 'Please include a valid email').isEmail().normalizeEmail({
        gmail_remove_dots: true
    }),
]

exports.passwordStrengthValidator = [
    check('password', 'Password must have more than 6 characters, and must contain at least one uppercase letter, one lowercase letter, one special character, and one number').isStrongPassword({
        minLength: 6,
        minUppercase: 1,
        minLowercase: 1,
        minNumbers: 1,
        minSymbols: 1
    }),
]

exports.loginValidator = [
    check('email', 'Please include a valid email').isEmail().normalizeEmail({
        gmail_remove_dots: true
    }),
    check('password', 'Password is required').not().isEmpty(),

]

exports.updateProfileValidator = [
    check('firstname', 'Name is required').not().isEmpty(),
    check('lastname', 'Name is required').not().isEmpty(),
    check('dob', 'Date must be in correct format yyyy-mm-dd').isISO8601().isLength({
        min: 10,
        max: 10
    }),
    check('mobile', 'Mobile number should contain 9 digits').isLength({
        min: 10,
        max: 10
    }),
]