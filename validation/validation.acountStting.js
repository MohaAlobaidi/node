const {check} =require('express-validator')

module.exports =[
  check('newPassword').matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)
]