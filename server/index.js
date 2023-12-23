const express = require("express");
const route = require("./routes/routes.js");
const app = express();
const cors = require("cors");
const { urlencoded } = require("body-parser");

app.use("/api", route);

app.use(cors());
app.use(express.json());
app.use(urlencoded({extended:true}))

app.listen(9000, () => {
  console.log("hello world");
});
