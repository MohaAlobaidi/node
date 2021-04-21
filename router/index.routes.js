
const app = require('express').Router()
const indexStartpage = require('../controller/controller.index')
const signinAndregistration = require('../middleware/signinAndRegister.auth')



app.get('/',signinAndregistration,indexStartpage.indexStartPage );


app.get('/registration',signinAndregistration,indexStartpage.registration);


module.exports = app