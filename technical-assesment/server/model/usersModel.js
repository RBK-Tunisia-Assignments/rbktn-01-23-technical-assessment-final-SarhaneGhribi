const connection = require("../database-mysql/index");
const getAllusers = (callback) => {
    const sql="SELECT * FROM users"
    connection.query(sql,(err,result)=>{
        callback(err,result)
    })
};
const postOneuser=(recepie,callback)=>{
    const sql=`INSERT INTO users values ?`
connection.query(sql,recepie,(err,result)=>{
    callback(err,result)})
}
module.exports = { getAllusers,
    postOneuser};