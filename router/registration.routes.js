
const app =require('express').Router()
const auth = require('../validation/validation')
const signupController = require('../controller/controller.signup')


app.post('/signup',auth,signupController.signup);

module.exports = app