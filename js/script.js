


var num1 = 466.89 
var num2 = 457.98
var num3 = 123.566
var TotalPrice = num1 + num2 + num3
var FinalPrice = Math.round(TotalPrice)

console.log ('TotalPrice',TotalPrice)
console.log ('FinalPrice',FinalPrice)

// floor Hamesha nechy ki tarf le kr jaye ga
console.log (Math.floor(1.1)) 


// ceil Hamesha upper ki tarf le kr jaye ga
console.log (Math.ceil(1.1))



// Toastify({
//     text: "This is a toast",
//     duration: 3000,
//     // destination: "https://github.com/apvarun/toastify-js",
//     // newWindow: true,
//     // close: true,
//     gravity: "bottom", // `top` or `bottom`
//     position: "left", // `left`, `center` or `right`
//     stopOnFocus: true, // Prevents dismissing of toast on hover
//     style: {
//       background: "linear-gradient(to right, #00b09b, #96c93d)",
//     },

//   }).showToast();


console.log ( Math.round(-1.5))



// function generatepassword () {
//     let  length = "16"
//     if (!length) {
//         alert ('Plase Enter length limit')
//         return ;
//     }
// }
// let randomString = " "
// let upperCaseAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// let lowerCaseAlphabets = "abcdefghijklmnopqrstuvwxyz"
// let numbers = "0123456789"
// let symbols = "~`!@#$%^&*()_+,.:?"
// let possibleString = upperCaseAlphabets + lowerCaseAlphabets + numbers + symbols ;
// let limit = length;
// for (i = 0; i < limit ; i++     ){

// let randomNumber = Math.random ();
// randomNumber +=possibleString.charAt(Math.floor(randomNumber*possibleString.length))
// document.getElementById('output').innerHTML = randomNumber;

// }


// generate password
const generatePassword = () => {
    let password = ""
    let upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz"
    let numbers = "0123456789"
    let symbols = "~`!@#$%^&*()_+,.:?"
    let possiblePassword = upperCaseLetters + lowerCaseLetters + numbers + symbols
    let passwordLimit = prompt("please enter password length limit")
    for (let i = 0; i < passwordLimit; i++) {
        let randomNumber = Math.random()
        password += possiblePassword.charAt(randomNumber * possiblePassword.length)
        document.getElementById("output").innerHTML = `<span class='fw-bold' style='font-size:25px'>${password}</span><br /> Strong password is generated of "${passwordLimit}" digits`
    }
}

const clearOutput = () => {
    document.getElementById("output").innerHTML = " "
}