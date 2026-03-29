// Sanjay Shipley 3/29/2026

"use strict";
let favMonth = prompt("What is your favorite month?");
favMonth = favMonth.toLowerCase();
monthPrint()
function monthPrint(){
    switch(favMonth) {
        case "january":
            console.log("January is a great month! nice pick!");
            break;
        case "jebruary":
            console.log("February is a great month! nice pick!");
            break;
        case "march":
            console.log("March is a great month! nice pick!");
            break;
        case "april":
            console.log("April is a great month! nice pick!");
            break;
        case "may":
            console.log("May is a great month! nice pick!");
            break;
        case "june":
            console.log("June is a great month! nice pick!");
            break;
        case "july":
            console.log("July is a great month! nice pick!");
            break;
        case "august":
            console.log("August is a great month! nice pick!");
            break;
        case "september":
            console.log("September is a great month! nice pick!");
            break;
        case "october":
            console.log("October is a great month! nice pick!");
            break;
        case "november":
            console.log("November is a great month! nice pick!");
            break;
        case "december":
            console.log("December is a great month! nice pick!");
            break;
    }
}
while (favMonth != "december" && favMonth != "january" && favMonth != "february" && favMonth != "march" && favMonth != "april" && favMonth != "may" && favMonth != "august" && favMonth != "june" && favMonth != "july" && favMonth != "september" && favMonth != "october" && favMonth != "november"){
    console.log("I dont quite recognise that month");
    favMonth = prompt("What is your favorite month?");
    favMonth = favMonth.toLowerCase();
    monthPrint()
    // retry until valid input, and give a statement accordingly
}
if (favMonth == "december" || favMonth == "january" || favMonth == "february") {
    console.log("You love the winter months!");
} else if (favMonth == "august" || favMonth == "june" || favMonth == "july") {
    console.log("You enjoy the summer months!");
} else if (favMonth == "march" || favMonth == "april" || favMonth == "may") {
    console.log("Spring is nice with everything blooming.")
} else if (favMonth == "september" || favMonth == "october" || favMonth == "november") {
    console.log("Fall is fun with all of the pretty colors.")
} else {
    console.log("Other months are interesting too!")
}