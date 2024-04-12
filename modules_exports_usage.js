let msg = require('./modules_exports_way1') // For custom module we need to use ./ and no need to us .js
let msgWay2 = require('./modules_exports_way2');

console.log(msg.myWelcomeMsg) // one way of usage
msg.myWelcomeMsg() //second way of usage
console.log(msg.name)
msg.welcomeUser(' Hello World')

console.log(msgWay2.welcomeMsg)
msgWay2.welcomeMsg()
console.log(msgWay2.authorName)
msgWay2.welcomeUserMsg(' hello friend')