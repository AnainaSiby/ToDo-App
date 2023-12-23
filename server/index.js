const express = require('express')
const app=express() 
const route=require('./routes/route.js')



app.use('/api',route)


app.listen(9000,()=>{
    console.log("Hello World")
})
