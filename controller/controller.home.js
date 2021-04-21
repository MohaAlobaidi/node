const noteModel = require('../model/note.model')
const userModel = require('../model/user.model')
const bcrypt = require('bcrypt')

module.exports.home =async (req, res) => {
  const notes = await noteModel.find({}).populate('userID','firstName -_id')
  //console.log(notes);
  //res.json(notes)
   res.render('home',{notes,username:req.session.userName})
 }


module.exports.profile = async (req, res) => {
  const userNotes = await noteModel.find({userID:req.session.userID}).populate('userID','firstName -_id')
  //console.log(userNotes);
   res.render('profile',{userNotes,username:req.session.userName})
 
 }

module.exports.homePost= async (req, res) => {
  console.log(req.body);
  const {email, password} = req.body
let user = await userModel.findOne({email})
if(user){
  //decrypt
  const match = await bcrypt.compare(password, user.password);

    if(match) {
        //login
        req.session.userID = user._id;
        req.session.userName = user.firstName
        req.session.password = user.password

        //console.log('the user id is : ',req.session.userID );
        res.redirect('home')
    }else{
      //passwprd is wrong
      req.flash('emailSignin',email)
      req.flash('password','password not correct')
      res.redirect('/')
    }
}else{
  //email not registerd
  req.flash('emailNotRegisterd','email not registerd')
  res.redirect('/')
}
}






 module.exports.addPost = (req, res) => {

  res.redirect('/home')
}



module.exports.logout =(req, res) => {
  req.session.destroy(()=>{
    res.redirect('/')
  })
}