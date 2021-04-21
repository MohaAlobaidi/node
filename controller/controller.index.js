
const userModel = require('../model/user.model')
const bcrypt = require('bcrypt')

module.exports.indexStartPage = (req, res) => {
  res.render('index',{ emailNotRegisterd:req.flash('emailNotRegisterd'),password: req.flash('password'),emailSignin: req.flash('emailSignin') })
}


module.exports.registration =  (req, res) => {

  res.render('registration',{
  errorsInp:req.flash('errors'), 
  firstname:req.flash('firstName'),
  lastName:req.flash('lastName'),
  userName:req.flash('userName'),
  email:req.flash('email'),
  password:req.flash('password'),
  emailIsExists:req.flash('emailIsExists')

})
}