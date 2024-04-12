// We have 2 ways to create connections
// 1. createPool - We can create a poll of a connection not a single connection and we can execute the query parallely 
// 2. createConnection - We have to manage the connection from our side like we have to do the connection and we have to close the connection

const { createPool } = require("mysql");
pool = createPool({
    host: "localhost",
    user: "root",
    password: "",
    connectionLimit: 10,
    database: "spd"
})

pool.query(`SELECT * FROM awv_custom_forms_meta`, (err,result,fields)=>{
    if(err){
        return console.log(err)
    }
    return console.log(result);
})