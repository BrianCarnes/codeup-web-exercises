"use strict";
(function() {
    /**
     * TODO:
     * Create a function called 'sayHello' that takes a parameter 'name'.
     * When called, the function should return a message that says hello to the passed in name.
     *
     * Example
     * > sayHello("codeup") // returns "Hello, codeup!"
     */
    let sayHello = (function (name) {
        name = prompt("Report thy name!")
        alert(`Hello, ${name}! Thou shall my perform my bidding`)
    })

    /**
     * TODO:
     * Call the function 'sayHello' and pass your name as a string literal argument.
     * Store the result of the function call in a variable named 'helloMessage'.
     *
     * console.log 'helloMessage' to check your work
     */
    sayHello("Veigar");
    /**
     * TODO:
     * Store your name as a string in a variable named 'myName', and pass that
     * variable to the 'sayHello' function. You should see the same output in the
     * console.
     */

// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
    let random = Math.floor((Math.random() * 3) + 1);

    /**
     * TODO:
     * Create a function called 'isTwo' that takes a number as a parameter.
     * The function should return a boolean value based on whether or not the passed
     * number is the number 2.
     *
     * Example
     * > isTwo(1) // returns false
     * > isTwo(2) // returns true
     * > isTwo(3) // returns false
     *
     * Call the function 'isTwo' passing the variable 'random' as a argument.
     *
     * console.log *outside of the function* to check your work (you should see a
     * different result everytime you refresh the page if you are using the random
     * number)
     */
    let isTwo = (function (x) {
        return x === 2;
    })
    isTwo(random);
    /**
     * TODO:
     * Create a function named 'calculateTip' to calculate a tip on a bill at a
     * restaurant. The function should accept a tip percentage and the total of the
     * bill, and return the amount to tip
     *
     * Examples:
     * > calculateTip(0.20, 20) // returns 4
     * > calculateTip(0.25, 25.50) // returns 6.375
     * > calculateTip(0.15, 33.42) // returns 5.013
     */
    let calculateTip = (function (tip) {
        alert(`The following are standard tip amounts: \n 15% is $${tip * .15} \n 18% is $${tip * .18} \n 20% is $${tip * .2}`)
    })
// calculateTip(10)
    /**
     * TODO:
     * Use prompt and alert in combination with your calculateTip function to
     * prompt the user for the bill total and a percentage they would like to tip,
     * then display the dollar amount they should tip
     */
    calculateTip(prompt("How much was your bill?"))
    /**
     * TODO:
     * Create a function named `applyDiscount`. This function should accept a price
     * (before a discount is applied), and a discount percentage (a number between 0
     * and 1). It should return the result of applying the discount to the original
     * price.
     *
     * Example:
     * > var originalPrice = 100;
     * > var discountPercent = .2; // 20%
     * > applyDiscount(originalPrice, discountPercent) // 80
     *
     * > applyDiscount(45.99, 0.12) // 40.4712
     */
    let applyDiscount = (function (x, y) {
        alert(`Your total is $${x - (x * (y * .01))}`);
    })
    applyDiscount(prompt("What is the total amount?"), prompt("How big is the discount?"));
})()