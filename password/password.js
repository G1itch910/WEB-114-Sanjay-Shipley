let password = prompt("Enter a password");
checkPassword()
while (password.length < 8 || !password.match(/[A-Z]/) || !password.match(/[a-z]/) || !password.match(/\d/)) {
    password = prompt("Enter a password");
    checkPassword()
}
function checkPassword(){
    if (password.length >= 8 && password.match(/[A-Z]/) && password.match(/[a-z]/) && password.match(/\d/)) {
        console.log("Congradulations! you have created a secure passcode!")
    } else {
        console.log("Access denied, the following conditions have not been met.")
    }
    if (password.length < 8) {
        console.log("password length must be above 8")
    }
    if (!password.match(/[A-Z]/)) {
        console.log("must contain one uppercase letter")
    }
    if (!password.match(/[a-z]/)) {
        console.log("must contain one lowercase letter")
    }
    if (!password.match(/\d/)) {
        console.log("must contain one digit")
    }
}
