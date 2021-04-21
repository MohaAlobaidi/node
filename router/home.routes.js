const app = require('express').Router()
const noteModel = require('../model/note.model')
const userModel = require('../model/user.model')
const generalAuth = require('../middleware/general.auth')
const homeController = require('../controller/controller.home')
const session = require('express-session')


app.get('/home',generalAuth ,homeController.home);

app.post('/addPost', async (req, res) => {
  //console.log(req.body);
  const{title,desc } = req.body
  await noteModel.insertMany({title,desc,userID:req.session.userID})
  res.redirect('/home')
});


app.post('/home',homeController.homePost);



app.get('/addPost',homeController.addPost);

app.get('/profile',generalAuth ,homeController.profile);


app.post('/editPost',async (req, res) => {
  const {  title,  desc,editNameAttribute} = req.body
  console.log(req.body);
   await noteModel.findByIdAndUpdate({_id:editNameAttribute},{title,desc} )
  res.redirect('/profile')
});


app.get('/deleteAcount', async(req, res) => {
  await noteModel.deleteMany(({userID:req.session.userID}))
  await userModel.findByIdAndDelete({_id:req.session.userID})
  req.session.destroy(()=>{
res.redirect('/')
  })
  

});



app.post('/delete', async(req, res) => {
  console.log(req.body.deleteNameAttribute);
  const {deleteNameAttribute} = req.body
  await noteModel.findByIdAndDelete({_id:deleteNameAttribute})
  res.redirect('/profile')
});




app.get('/logout',homeController.logout );

module.exports = app