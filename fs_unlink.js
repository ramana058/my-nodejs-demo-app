var http= require('http');
var fs = require('fs');

http.createServer((req,res)=>{
    console.log('Server is running');   
    fs.unlink('test12.txt',(err)=>{
        if(err) throw err;
        console.log("File got deleted");
    });
}).listen('8080');



