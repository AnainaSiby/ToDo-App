const signUp=(req,res)=>{
   const {fname,lname,email,password} =req.body;
   res.json("Successfully Registered")

}


module.exports={
    signUp
}
