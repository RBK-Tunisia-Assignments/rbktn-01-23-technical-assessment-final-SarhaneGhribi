const express = require("express");
const urouter = express.Router();
const{getusers, postuser}=require("../controller/usersController")

urouter.get("/users",getusers);
urouter.post("/users",postuser)




module.exports = urouter;
