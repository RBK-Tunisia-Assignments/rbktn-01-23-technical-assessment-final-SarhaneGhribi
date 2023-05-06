const express = require("express");
const rrouter = express.Router();
const{getrecepie,postrecepie,updaterecepie,deleterecepie}=require("../controller/recipiesController")



rrouter.get("/",getrecepie);
rrouter.post("/",postrecepie)
rrouter.patch("/:recepie_Name",updaterecepie)
rrouter.delete("/:recepie_Name",deleterecepie)




module.exports = rrouter;
