const userModel = require('../model/user.model')
const bcrypt = require('bcrypt')
const {validationResult} = require('express-validator')


module.exports.signup= async(req, res) => {
  const errors = validationResult(req)

  //console.log( 'errorsArray',errors.array());
  //console.log(  'Empty',errors.isEmpty());


  const {firstName,lastName,userName,email,password} = req.body
  //check input validation 
  if(errors.isEmpty()){

   
     // user Exists
      let user = await userModel.findOne({email})
      if(user == null){
         // hash password
        bcrypt.hash(password, 7, async function(err, hash) {
      // Store hash in your password DB.
      //insert user 
      await userModel.insertMany({firstName,lastName,userName,email,password:hash})
      res.redirect('/')
  });
      
      }
      else{
      req.flash('emailIsExists','the email is already exists')
      res.redirect('/registration')
      }
  
  }else{
  // somthing is wrong with input validation
  req.flash('errors',errors.array())
  req.flash('firstName',firstName)
  req.flash('lastName',lastName)
  req.flash('userName',userName)
  req.flash('email',email)
  //req.flash('password',password)
  res.redirect('/registration')

  }

}