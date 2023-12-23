const express=require('express')
const {signUp} = require('../controls/service.js')
const router=express.Router()

router.route('/signup').post(signUp)

module.exports=router; 