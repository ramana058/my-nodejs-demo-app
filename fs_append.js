var http= require('http');
var fs = require('fs');

http.createServer((req,res)=>{
    console.log('Server is running');
    fs.appendFile("test.txt",'\n This text will be added through append file', (err)=>{
       // res.write("Appending text to the existing file is completed");
        // res.end();
    });
    res.write("Appending text to the existing file is completed");
    res.end();
}).listen('8080');



