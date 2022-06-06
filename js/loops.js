"use strict";

function showMultiplicationTable (userNumberInput) {
    for (let i = 0; i < 11; i++) {
        console.log(userNumberInput*i);
    }
}
function randomNumberChecker () {
    let evenOrOdd;
    let random = Math.floor((Math.random() * 200)+20);
    for (let i = 0; i < 11; i++) {
        if (random % 2 === 0) {
            evenOrOdd = "Even";
        } else {
            evenOrOdd = "Odd";
        }
        console.log(`${random} is ${evenOrOdd}`)
    }
}

function numberPyramid () {
    let pyramid = "";
    for (let i = 0; i < 10; i++){
        for (let j = 0; j < i; j++) {
            pyramid += i;
        }
        pyramid += "\n";
    }
    console.log(pyramid)
}
numberPyramid();

function fiveMultiplicationTable () {
    for (let i = 20; i < 0; i--) {
        console.log(i * 5)
    }
}