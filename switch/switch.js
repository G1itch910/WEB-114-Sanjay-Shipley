"use strict";
let favMonth = prompt("What is your favorite month?");
function monthPrint(){
    switch(favMonth) {
        case "January":
            console.log("January is a great month! nice pick!");
            break;
        case "February":
            console.log("February is a great month! nice pick!");
            break;
        case "March":
            console.log("March is a great month! nice pick!");
            break;
        case "April":
            console.log("April is a great month! nice pick!");
            break;
        case "May":
            console.log("May is a great month! nice pick!");
            break;
        case "June":
            console.log("June is a great month! nice pick!");
            break;
        case "July":
            console.log("July is a great month! nice pick!");
            break;
        case "August":
            console.log("August is a great month! nice pick!");
            break;
        case "September":
            console.log("September is a great month! nice pick!");
            break;
        case "October":
            console.log("October is a great month! nice pick!");
            break;
        case "November":
            console.log("November is a great month! nice pick!");
            break;
        case "December":
            console.log("December is a great month! nice pick!");
            break;
    }
}
while (favMonth != "December" && favMonth != "January" && favMonth != "February" && favMonth != "March" && favMonth != "April" && favMonth != "May" && favMonth != "August" && favMonth != "June" && favMonth != "July" && favMonth != "September" && favMonth != "October" && favMonth != "November"){
    console.log("I dont quite recognise that month, remember to enter them with a capital letter! (Ex. May)");
    favMonth = prompt("What is your favorite month?");
    monthPrint()
    // retry until valid input, and give a statement accordingly
}
if (favMonth == "December" || favMonth == "January" || favMonth == "February") {
    console.log("You love the winter months!");
} else if (favMonth == "August" || favMonth == "June" || favMonth == "July") {
    console.log("You enjoy the summer months!");
} else if (favMonth == "March" || favMonth == "April" || favMonth == "May") {
    console.log("Spring is nice with everything blooming.")
} else if (favMonth == "September" || favMonth == "October" || favMonth == "November") {
    console.log("Fall is fun with all of the pretty colors.")
} else {
    console.log("Other months are interesting too!")
}