"use strict";

// function twoTables() {
//     let i = 2;
//     while (i <= 65536) {
//         console.log(i)
//         i *= 2;
//     }
// }
//
// twoTables();

// An ice cream seller can't go home until she sells all of her cones.
// 1. First write enough code that generates a random number between 50 and 100 representing the amount of cones to sell before you start your loop.
// 2. Inside the loop your code should generate another random number between 1 and 5, simulating the amount of cones being bought by her clients.
// 3. Use a do-while loop to log to the console the amount of cones sold to each person. The below code shows how to get the random numbers for this exercise.

function iceCreamStory() {
    let allCones = Math.floor(Math.random() * 50) + 50;
    let conesRemaining = 0;
    let conesSold = 0
    while (conesSold <= allCones) {
        let oneThroughFive = Math.floor(Math.random() * 5) + 1;
        conesRemaining = allCones - conesSold;
        console.log(`${conesSold} cones sold...${conesRemaining} cones remain`);
        if (oneThroughFive > conesRemaining && conesRemaining !== 0) {
            console.log(`Sorry, I can only sell you ${conesRemaining} cones, it's all I have left`);
            continue;
        } else if (conesRemaining === 0) {
            console.log("Yay! I sold them all!")
        }
        conesSold += oneThroughFive;
    }
}

iceCreamStory();















// Randomize amount of all cones - fixed
// initialize cones remaining
// initialize cones sold
// write a while loop that evaluates cones sold with respect to total inventory of cones
// randomize how many cones you sell each time
// store how many cones you have remaining
// conditionally evaluate if you're trying to sell more cones than you have and if you still have cones remaining
// close out the loop if you sell all of your cones
// increase your counter