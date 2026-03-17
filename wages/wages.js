"use strict";
let confirmChoice = false // this variable is going to be used throughout the program
let hourlyWage
let hoursWorked
while (confirmChoice == false) {
    hourlyWage = prompt("What is your hourly wage?");
    hourlyWage = Number(hourlyWage.trim());
    confirmChoice = confirm(`You entered ${hourlyWage}, is that correct?`)
}
confirmChoice = false
while (confirmChoice == false) {
    hoursWorked = prompt("How many hours did you work this week?");
    hoursWorked = Number(hoursWorked.trim());
    confirmChoice = confirm(`You entered ${hoursWorked}, is that correct?`);
}
const grossPay = hoursWorked * hourlyWage;
const taxes = grossPay * 0.1;
const netPay = grossPay - taxes;
console.log(`You earned $${netPay.toFixed(2)} this week!`);

if (hoursWorked > 40) {
    console.log("You worked overtime this week!");
} else if (hoursWorked == 40) {
    console.log("You worked exactly 40 hours");
} else {
    console.log("No overtime this week.");
}

if (netPay > 800) {
    console.log("You made over $800, congrats!")
} else {
    console.log("Looks like you didn't make over $800 this week, keep going, you'll get it eventually!")
}