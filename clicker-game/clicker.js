/*
All credit to Sanjay Shipley, last updated on May 5th

README.TXT

This project is a simple JavaScript clicker game, designed to be a fun way to pass the time.
I chose this project because it fits all of the criteria outlined in the assignment, and it pushed me to further develop my JavaScript skills.

As for the development process, I created this project over the course of several days. 
I started with the basic CSS so I could get an idea of what I wanted the project to look like. 
Then, I moved on to the HTML body, creating a sort of skeleton for the rest of the code. A
fterwards, I developed the JavaScript to get everything functioning.

Once I had all of the main code complete, I began thorough testing, 
checking whether all of the buttons functioned exactly as intended and reviewing the project for grammatical errors.

*/

function win() {
    // subtract 500$, update the money counter, and alert the user
    money -= 500
    moneyElement.textContent = "money: " + money
    alert("You Win!")
}

"use strict";
const jsImage = document.getElementById("jsImage");

// the <button> that actually triggers a purchase
const addButton = document.getElementById("addButton");
const multButton = document.getElementById("multButton");
const endButton = document.getElementById("endButton");

// The <p> displaying the user's money
const moneyElement = document.getElementById("money");

// click power
let addCost = 5;
let multCost = 25;
let money = 0;
let clickPower = 1;

jsImage.addEventListener('click', function(clickJs) { 
    // handle the clicking of the JS logo, and give the money to the user
    money += clickPower;
    moneyElement.textContent = "money: " + money;
    console.log(clickPower);
})
addButton.addEventListener('click', function(clickAdd) { 
    // handle the ADD CLICKING POWER button
    if (money >= addCost) {
        clickPower++;
        money -= addCost;
        addCost = Math.round(addCost * 1.5);
        addButton.textContent = "+1 clicking power - " + addCost + "$";
        moneyElement.textContent = "money: " + money;
    }
    else {
        // let the user know how much more they need
        console.log("You need " + (addCost - money) + " more dollars!");
    }
})
multButton.addEventListener('click', function(clickMult) { 
    // handle the MULTIPLE CLICKING power button
    if (money >= multCost) {
        clickPower = clickPower * 2;
        money -= multCost;
        multCost = Math.round(multCost * 2);
        multButton.textContent = "x2 clicking power - " + multCost + "$";
        moneyElement.textContent = "money: " + money;
    }
    else {
        // let the user know how much more they need
        console.log("You need " + (multCost - money) + " more dollars!");
    }
})
endButton.addEventListener('click', function(clickMult) { 
    // when clicked, if their money is above 500, end the game
    if (money >= 500) {
        win();
    }
    else {
        // let the user know how much more they need
        console.log("You need " + (500 - money) + " more dollars!");
    }
})