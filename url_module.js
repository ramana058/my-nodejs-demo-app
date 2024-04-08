var http= require('http');
var url = require('url');

http.createServer((req,res)=>{
    console.log('Server is running');
    var address = "http://localhost:8080/home.html?year=2020&month=feb";
    var q = url.parse(address,true)
    console.log(q.host)
    console.log(q.pathname)
    console.log(q.search);
    res.write("URL processed successfully")
    res.end();
}).listen('8080');



