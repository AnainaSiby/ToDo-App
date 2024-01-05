const express=require('express')
const {signUp,addTodo, viewTodos} = require('../controls/service.js')
const router=express.Router()

router.route('/signup').post(signUp)
router.route('/addtodo').post(addTodo)
router.route('/todo').get(viewTodos)

module.exports=router; 