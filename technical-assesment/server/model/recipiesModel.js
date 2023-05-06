const connection = require("../database-mysql/index");
//uncomment this line if you want to use promises
// const  connection  = require("../database-mysql/index").promise();

const getAll = (callback) => {
    const sql="SELECT * FROM recepie"
    connection.query(sql,(err,result)=>{
        callback(err,result)
    })
};
const postOne=(recepie,callback)=>{
    const sql=`INSERT INTO recepie set ?`
connection.query(sql,recepie,(err,result)=>{
    callback(err,result)})
}
const updateOne=(name,body,callback)=>{
    const sql= `update recepie set ? where recepie_Name="${name}"`
    connection.query(sql,body,(err,result)=>{
        callback(err,result)})
}
const deleteOne=(name,callback)=>{
    const sql= `delete from recepie where recepie_Name="${name}"`
    connection.query(sql,(err,result)=>{
        callback(err,result)
    })
}
module.exports = { getAll,
postOne,
updateOne,
deleteOne};
