const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/todo");
  console.log("db connected successfully!!!");
}
//user registration
const userSchema = mongoose.Schema(
  {
    first_name: String,
    last_name: String,
    email: String,
    password: String,
  },
  { timestamps: true }
);

const userModel = mongoose.model("user_tbl", userSchema);

//adding todo
const todoScheme = mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

const todoModel = mongoose.model("todo_list", todoScheme);

module.exports = {
  userModel,
  todoModel,
};
