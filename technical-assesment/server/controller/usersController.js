const {getAllusers,postOneuser}=require("../model/usersModel")
const getusers = (req, res) => {
const callback=(err,result)=>{
if(err) res.status(500).send(err)
else res.status(200).send(result)
}
getAllusers(callback)
};
const postuser=(req,res)=>{
  const user=req.body
  const callback=(err,result)=>{
    if(err) res.status(500).send(err)
else res.status(201).send(result)
  }
  postOneuser(user,callback)
}
module.exports = {
    getusers,
    postuser
  };