var http= require('http');
var fs = require('fs');

http.createServer((req,res)=>{
    console.log('Server is running');
    // To read the content from the file
    fs.readFile('test.txt',(err,data)=>{
        res.write(data);
        res.end();
    })
}).listen('8080');



