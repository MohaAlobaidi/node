const express = require('express')
const app= express()
const path = require('path')
let port = 3000
const mongoose = require('mongoose');
var session = require('express-session')
var MongoDBStore = require('connect-mongodb-session')(session);
var store = new MongoDBStore({
  uri: 'mongodb+srv://admin:admin@cluster0.k0fvo.mongodb.net/project1',
  collection: 'mySessions'
});
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  store
}))
var flash = require('connect-flash')
app.use(flash())

app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.set('view engine', 'ejs');

app.use(require('./router/index.routes'))
app.use(require('./router/registration.routes'))
app.use(require('./router/home.routes'))
app.use(require('./router/acountStting.routes'))
app.get('*', (req, res) => {
  res.send('page not found')
});
mongoose.connect('mongodb+srv://admin:admin@cluster0.k0fvo.mongodb.net/project1', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>console.log('connected to mongoDB'))
.catch(()=> console.log('can not connect to mongoDb'))

app.listen(process.env.PORT ||3000, () => {
  console.log('App listening on port 3000!');
});