const express=require('express')
const router=express.Router()
const {register} = require('../control/service.js')


router.route("/signup").post(register)

module.exports=router; 