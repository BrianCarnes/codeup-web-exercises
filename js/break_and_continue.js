"use strict";
(function () {

    function oddOneThroughFifty() {
        let userOddNumber = parseInt(prompt("Pick a number an odd number between 1-50"));
        for (let i = 1; i < 50; i++) {
            if (i % 2 !== 0) {
                if (i === userOddNumber) {
                    console.log("Yikes! Skipping " + userOddNumber)
                    continue;
                }
                console.log("Here is an odd number " + i);
                continue;
            }
        }
    }

    oddOneThroughFifty();

})()