"use strict";

console.log("Hello from external JavaScript!");
alert("Welcome to my website");
let userFavoriteColor = prompt("What is your favorite color?")
alert(`Great, ${userFavoriteColor} is my favorite color too!`)

let movies = (BB, LM, Herc) => (BB + LM + Herc)*3;
console.log(movies(3,5,1));

let pay = (Googz, Amaz, Facez) => (Googz*400)+(Amaz*380)+(Facez*350);
console.log(pay(6,4,10));

let enrollment = (full, conflict) => full === true && conflict === true ? console.log("Registered") : console.log("Error: conflict");
enrollment(true, true);

let productOffer = (items, expired, premium) => items >= 2 && expired === false || premium === true ? console.log("discount applied") : console.log("no discount");
productOffer(1,true,true);