var http= require('http');
var fs = require('fs');

http.createServer((req,res)=>{
    console.log('Server is running');   
    fs.writeFile('test.txt',"Create a file and add this content to the file",(err)=>{
        res.write("writing to the file is completed");
        res.end();
    });
}).listen('8080');



