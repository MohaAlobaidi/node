const app = require('express').Router()

const userModel = require('../model/user.model')
const generalAuth = require('../middleware/general.auth')
const acountSittingController = require('../controller/controller.acountSetting')
const validation = require('../validation/validation.acountStting')

app.get('/acount_setting',generalAuth ,acountSittingController.acountSettingHome);

app.post('/AccountSetting', generalAuth,validation ,acountSittingController.AccountSetting);

app.get('/AccountSetting', (req, res) => {
  res.redirect('/acount_setting')
});
module.exports = app