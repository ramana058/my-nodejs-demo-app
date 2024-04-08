var http= require('http');
http.createServer((req,res)=>{
    console.log('Server is running');
    res.write('<h1>Hello world</h1>');
    res.end();
}).listen('8080');
