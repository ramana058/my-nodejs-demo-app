var fs = require('fs')
var writeStream = fs.createWriteStream('Destination.txt')
var writeData = "Welcome to streams in node js for creating file with writes stream"
writeStream.write(writeData,'utf-8')
writeStream.end()
writeStream.on('finish',function(){
    console.log('Writing is completed')
})
