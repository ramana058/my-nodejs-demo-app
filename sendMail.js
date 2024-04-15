var nodemailer = require('nodemailer')
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'ramana058@gmail.com',
        pass: 'Hyderabad@2010'
    }
})
var options = {
    from: 'ramana058@gmail.com',
    to: 'venkataramana@inventcorp.com',
    subject: 'Testing mail',
    text: 'This mail by node mailer'
}
transporter.sendMail(options,(err,info)=>{
    if(err){
        console.log(err)
    }else{
        console.log('Mail sent successfully'+info.response)
    }
})