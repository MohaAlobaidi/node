
const {check} = require('express-validator')
module.exports=[
  check('firstName').matches(/^[A-Za-z]+([\ A-Za-z-]+)*$/),
  check('lastName').matches(/^[A-Za-z]+([\ A-Za-z-]+)*$/),
  check('userName').matches(/^[A-Za-z]+([\ A-Za-z-]+)*$/),
  check('email').isEmail(),
  check('password').matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)
] 