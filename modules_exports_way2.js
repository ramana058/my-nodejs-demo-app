function helloMsg(){
    console.log("Welcome to hello function")
}

module.exports = {
    welcomeMsg: helloMsg,
    authorName: "venkat",
    welcomeUserMsg: userName => {
            console.log(`Good morning ${userName}`)
    }
}