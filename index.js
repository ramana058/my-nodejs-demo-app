const express = require("express")
const port = process.env.port || 8080

const app = express()
app.get('/',(req,res)=> {
    res.send("<h1>Welcome to node js sample application</h1>")
})
app.listen(port,()=>{
    console.log("Application is running on port: ",port)
})