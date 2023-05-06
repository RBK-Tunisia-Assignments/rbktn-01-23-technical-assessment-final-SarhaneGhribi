const {getAll,postOne,updateOne,deleteOne}=require("../model/recipiesModel")
const getrecepie = (req, res) => {
const callback=(err,result)=>{
if(err) res.status(500).send(err)
else res.status(200).send(result)
}
getAll(callback)
};
const postrecepie=(req,res)=>{
  const recepie=req.body
  const callback=(err,result)=>{
    if(err) res.status(500).send(err)
else res.status(201).send(result)
  }
  postOne(recepie,callback)
}
const deleterecepie=(req,res)=>{
  const name=req.params.recepie_Name
const callback=(err,result)=>{
  if(err) res.status(500).send(err)
else res.status(204).send(result)
}
deleteOne(name,callback)
}
const updaterecepie=(req,res)=>{
  const name=req.params.recepie_Name
  const body=req.body
const callback=(err,result)=>{
  if(err) res.status(500).send(err)
else res.status(200).send(result)
}
updateOne(name,body,callback)
}
module.exports = {
  getrecepie,
  postrecepie,
  deleterecepie,
  updaterecepie
};
