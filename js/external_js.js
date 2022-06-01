"use strict";

console.log("Hello from external JavaScript!");
alert("Welcome to my website");
let userFavoriteColor = prompt("What is your favorite color?")
alert(`Great, ${userFavoriteColor} is my favorite color too!`)

let movies = () => {
    let BB = prompt("How many days have you had Brother Bear?");
    let LM = prompt("How many days have you had The Little Mermaid?");
    let Herc = prompt("How many days have you had Hercules?")
    let Total = (3 * Herc) + (3 * BB) + (3 * LM);
    alert(`You owe Blockbusters $${Total}.00`)
    console.log(`${BB}, ${LM}, ${Herc}, ${Total}`)
}
movies();


let pay = () => {
    let Googz = prompt("How many hours did you work for Google?");
    let Amaz = prompt("How many hours did you work for Amazon?")
    let Facez = prompt("How many hours did you work for Meta?")
    let Total = (Googz * 400) + (Amaz * 380) + (Facez * 350);
    alert(`You will be paid $${Total}.00`)
}
pay();

let enrollment = () => {
    let full = confirm("Are you enrolled in the class?");
    let conflict = confirm("Is the class full?");
    full === true && conflict === true ? alert("Congratulations, you are registered") : alert("Error: conflict");
}
enrollment();

let productOffer = () => {
    let items = prompt("How many items are in your shopping cart?");
    let expired = confirm("Do you want to use a coupon today?");
    let premium = confirm("Are you a premium member?");
    items >= 2 && expired === false || premium === true ? alert("discount applied") : alert("no discount");
}
productOffer();