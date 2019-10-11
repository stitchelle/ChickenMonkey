/*
Write a program that prints the numbers from 1 to 100. But for multiples of five (5, 10, 15, etc.) print "Chicken" instead of the number and for the multiples of seven (7, 14, 21, etc.) print "Monkey". For numbers which are multiples of both five and seven print "ChickenMonkey".

To determine if a number can be evenly divided by 5 or 7, use the JavaScript remainder operator.

You can start with this simpler version that outputs even numbers to the console and ignores odd numbers. You need to refactor this code to meet the requirements above.

for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
    // Divide the current number by 2, and check if the remainder is 0
    if (currentNumber % 2 === 0) {
        console.log(currentNumber) // Only 2, 4, 6 will appear
    }
}
*/
// first try: one if block that goes from top to bottom
/*
for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
    if (currentNumber % 5 === 0 && currentNumber % 7 === 0){
        console.log("ChickenMonkey")
    } else if (currentNumber % 5 === 0){
        console.log("Chicken")
    } else if (currentNumber % 7 === 0){
        console.log("Monkey")
    } else { 
        console.log(currentNumber)
    }
}
*/


// second try: nested if, if first if is true the it goes to the nested if block. if first if is false then goes to else.
/*
for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
    if (currentNumber % 5 === 0 || currentNumber % 7 === 0){
        if (currentNumber % 5 === 0 && currentNumber % 7 === 0){
            console.log("ChickenMonkey")
        } else if (currentNumber % 5 === 0){
            console.log("Chicken")
        } else {
            console.log("Monkey")
        }
    } else { 
        console.log(currentNumber)
    }
}
*/

// third try: 3 seperate if blocks. 3rd if is checking if nothing has been added to output which means it is not a multiple of  5 or 7.

/*
for (let currentNumber = 1; currentNumber <= 40; currentNumber++) {
    let output = ""
    if (currentNumber % 5 === 0) {
        output += "Chicken"
    }

    if (currentNumber % 7 === 0) {
        output += "Monkey"
    }

    if (output.length === 0){
        output += currentNumber
    }
    console.log(output)
}
*/

// forth try: 3 if blocks. 3rd block check if currentNumber is NOT a multiple of 5 AND NOT a multiple of 7.
/*
for (let currentNumber = 1; currentNumber <= 40; currentNumber++) {
    let output = ""
    if (currentNumber % 5 === 0) {
        output += "Chicken"
    }

    if (currentNumber % 7 === 0) {
        output += "Monkey"
    }

    if (!(currentNumber % 5 === 0) && !(currentNumber % 7 === 0)) {
        output += currentNumber
    }
    console.log(output)
}
*/
// fifth try: 3 if blocks. 3rd block checks if currentNumber is NOT a multiple of 5 or 7

for (let currentNumber = 1; currentNumber <= 40; currentNumber++) {
    let output = ""
    if (currentNumber % 5 === 0) {
        output += "Chicken"
    }

    if (currentNumber % 7 === 0) {
        output += "Monkey"
    }

    if (!(currentNumber % 5 === 0 || currentNumber % 7 === 0)) {
        output += currentNumber
    }
    console.log(output)
}