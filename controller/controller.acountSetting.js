const userModel = require('../model/user.model')
const {validationResult} =require('express-validator')
//const validation = require('../validation/validation.acountStting')
const bcrypt = require('bcrypt');

module.exports.acountSettingHome =(req, res) => {
  console.log(req.flash('repeatPass'));
  res.render('acount_setting',{
    username:req.session.userName,
    oldPass:req.flash('oldPassword'),
    //repeatPass: req.flash('repeatPass')
  })
}


module.exports.AccountSetting =async(req, res) => {
  console.log(req.body);
  const errors =validationResult(req)
  console.log(errors);

    const { oldPassword, newPassword, repeatPassword} = req.body

    const match = await bcrypt.compare(oldPassword, req.session.password );
    if(match){
        if(errors.isEmpty()){
            if(newPassword == repeatPassword){
              console.log('it is match')
              //hash password befor insert it 
              bcrypt.hash(newPassword, 7, async function(err, hash) {
                // Store hash in your password DB.
                await userModel.findByIdAndUpdate(req.session.userID,{password:hash})
                req.session.destroy(()=>{
                  res.redirect('/')
                })
            });
            }else{
              res.redirect('/AccountSetting')
            }
        }else{
          res.redirect('/AccountSetting')
        }
    }else{
      req.flash('oldPassword','your password not correct')
      res.redirect('/AccountSetting')
    }

}