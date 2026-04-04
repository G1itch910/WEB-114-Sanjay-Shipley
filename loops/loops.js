"use strict";
let finalCrates;
let crates = {
    fragile: 0,
    loaded: 0,
    inspected: 0,
};
for (let i = 1; i <= 20; i++) {
    if (i % 5 == 0) {
        console.log("Crate " + i + " : handle with care");
        crates.fragile += 1;
    } else if (i % 2 == 0) {
        console.log("Crate " + i + " : load crate");
        crates.loaded += 1;
    } else {
        console.log("Crate " + i + " : inspect crate");
        crates.inspected += 1;
    }
    finalCrates = i;
}
console.log("Total crates scanned: " + finalCrates);
console.log("\nExtra Practice:\n\n");

const userInput = prompt("How many crates do you have?");
if (userInput != null) {
    for (let i = 1; i <= userInput; i++) {
        if (i % 5 == 0) {
            console.log("Crate " + i + " : handle with care");
            crates.fragile += 1;
        } else if (i % 2 == 0) {
            console.log("Crate " + i + " : load crate");
            crates.loaded += 1;
        } else {
            console.log("Crate " + i + " : inspect crate");
            crates.inspected += 1;
        }
        finalCrates = i;
    }
    console.log("\nTotal crates scanned: " + finalCrates);
} else {
    console.log("You didn't enter any number");
}

console.log("Number of fragile crates: " + crates.fragile);
console.log("Number of loaded crates:" + crates.loaded);
console.log("Number of inspected crates: " + crates.inspected);