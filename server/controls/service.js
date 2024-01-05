const { userModel, todoModel } = require("../model/database_config.js");
const bcrypt = require("bcrypt");
const saltRounds = 10;

//user registration
const signUp = async (req, res) => {
  try {
    const { fname, lname, email, password } = req.body;
    const em =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const name = /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/;
    const pass = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if (fname == "" || fname == null) {
      res.json({ status: false, msg: "First Name is required" });
    } else if (name.test(fname) == false) {
      res.json({ status: false, msg: "Please enter a valid name" });
    }

    if (lname == "" || lname == null) {
      res.json({ status: false, msg: "Last Name is required" });
    } else if (name.test(lname) == false) {
      res.json({ status: false, msg: "Please enter a valid name" });
    }

    if (email == "" || email == null) {
      res.json({ status: false, msg: "Email is required" });
    } else if (em.test(email) == false) {
      res.json({ status: false, msg: "Enter a valid Email" });
    }

    var result = await userModel.find({ email: email });
    if (result.length === 0) {
      bcrypt.hash(password, saltRounds, function (err, hash) {
        userModel.create({
          first_name: fname,
          last_name: lname,
          email: email,
          password: hash,
        });
      });
      res.json({ status: true, msg: "Successfully Registered" });
    } else {
      res.json({ status: false, msg: "Email already exists" });
    }
  } catch (err) {
    console.log(err);
  }
};

//add todo
const addTodo = async (req, res) => {
  try {
    const { title, desc } = req.body;
    const add = {
      title: title,
      description: desc,
    };
    const todo = await todoModel.create(add);
    res.json({ status: true, message: "Added successfully!" });
  } catch (err) {
    console.log(err);
  }
};

//view todo list

const viewTodos = async (req,res) =>{
  try{
    const todos = await todoModel.find();
    res.json(todos)
  }catch(error){
    console.log(error)
  }
}

module.exports = {
  signUp,
  addTodo,
  viewTodos
};
