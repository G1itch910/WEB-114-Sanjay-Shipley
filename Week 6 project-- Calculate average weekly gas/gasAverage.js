// Sanjay Shipley April 12th
function calcGasAvg() {
    let weeklyGas = 0;
    while (weeklyGas != -1) {
            weeklyGas = prompt("Enter your first week's gas total. Enter -1 when you are done.");
            if (weeklyGas == -1) {
                break;
                // break the loop without adding to the gas totals
            }
            if (weeklyGas === null) {
                return null;
            }
            if (isNaN(weeklyGas) || weeklyGas == "") {
                alert("Please enter a valid number");
            } else {
                // if input is valid
                gasTotal += parseInt(weeklyGas);
                entryCount++;
            }
    }
    gasTotal = gasTotal / entryCount
    return gasTotal
}

// asking for the users name
let entryCount = 0;
let gasTotal = 0;
let userName = null;
userName = prompt("Enter your name");
if (userName === null) {
    alert("You cancelled the name prompt");
} else if (userName.length == 0) {
    alert("You must type a name.");
} else {
    userName = userName.trim();
    // calculating average gas based on input
    average = calcGasAvg();
    // output to the user
    if (average === null) {
        alert("You cancelled entering gas totals.");
    } else {
        if (entryCount == 0) {
            alert("No gas totals were entered.");
        } else if (entryCount == 1) {
            message = userName + ", you spent " + gasTotal.toFixed(2) + " this week";
        } else {
            message = userName + ", you spent " + average.toFixed(2) + " on average";
        }
        alert(message);
        alert("You entered " + entryCount + " gas totals");
    }
}