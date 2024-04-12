function hello(){
    console.log("Welcome to hello function")
}

exports.myWelcomeMsg = hello
exports.name = "venkat"
this.welcomeUser = userName => {
    console.log(`Good morning ${userName}`)
}