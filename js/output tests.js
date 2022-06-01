"use strict";

console.log(typeof(99.9));
console.log(typeof("false"));
console.log(typeof(false));
console.log(typeof('0'));
console.log(typeof(0));
console.log(typeof(true));
console.log(typeof('true'));

/* What data type would best represent:

 * A term or phrase typed into a search box? string
 * If a user is logged in? boolean
 * A discount amount to apply to a user's shopping cart? number
 * Whether or not a coupon code is valid? boolean
 * An email address typed into a registration form? string
 * The price of a product? number

*/

console.log('1' + 2); //"12"
console.log(typeof '1' + 2); // string2
console.log(6 % 4); //2
console.log('3 + 4 is ' + 3 + 4); // how could you make this produce the correct output? output is :"3 + 4 is 34", change 3 + 4 to 7
console.log(0 < 0); //false
console.log('false' == false); //false
console.log(true == 'true'); //false
console.log(5 >= -5); //true
console.log(!false || false); //true
console.log(true || "42"); //true
console.log(!true && !false); //false
console.log(6 % 5); //1
console.log(5 < 4 && 1 === 1); //false
console.log(typeof 'codeup' === 'string'); //true
console.log('codeup' === 'codeup' && 'codeup' === 'Codeup'); //false
console.log(4 >= 0 && 1 !== '1'); //true
console.log(6 % 3 === 0); //true
console.log(5 % 2 !== 0); //true

let a = 1; //1
let b = a++; //1
let c = ++a; //3

let d = "hello";
let e = false;

console.log(d++); //NaN
console.log(e++); //0

let perplexed; // perplexed is undefined (no value is assigned)
perplexed + 2;

let price = 2.7;
price.toFixed(2);

console.log(isNaN(0)) //false
console.log(isNaN(1)) //false
console.log(isNaN("")) //false
console.log(isNaN("string")) //true
console.log(isNaN("0")) //false
console.log(isNaN("1")) //false
console.log(isNaN("3.145")) //false
console.log(isNaN(Number.MAX_VALUE)) //false
console.log(isNaN(Infinity)) //false
console.log(isNaN("true")) //true
console.log(isNaN(true)) //false
console.log(isNaN("false")) //true
console.log(isNaN(false)) //false
console.log(NaN == NaN); //false, lol

console.log(!true); //false
console.log(!false); //true
console.log(!!true); //true
console.log(!!false); //false
console.log(!!0); //false
console.log(!!-0); //false
console.log(!!1); //true
console.log(!!-1); //true
console.log(!!0.1); //true
console.log(!!"hello"); //true
console.log(!!""); //false
console.log(!!''); //false
console.log(!!"false"); //true
console.log(!!"0"); //true

// String Manipulations //
let sample = "Hello Codeup";
console.log(sample.length); //12
console.log(sample.toUpperCase()); //"HELLO CODEUP"
console.log(sample.toLowerCase()); //"hello codeup"
sample = sample + " students";
sample.replace("students", "Class");
console.log(sample.indexOf("c")); //-1
console.log(sample.indexOf("C")); //6
console.log(sample.substring(sample.indexOf("C"),sample.indexOf("C")+6));

// Problem 3 //
let movies = (BB, LM, Herc) => (BB + LM + Herc)*3;
console.log(movies(3,5,1));

let pay = (Googz, Amaz, Facez) => (Googz*400)+(Amaz*380)+(Facez*350);
console.log(pay(6,4,10));

let enrollment = (full, conflict) => full === true && conflict === true ? console.log("Registered") : console.log("Error: conflict");
enrollment(true, true);

let productOffer = (items, expired, premium) => items >= 2 && expired === false || premium === true ? console.log("discount applied") : console.log("no discount");
productOffer(1,true,true);
///////////////
// Problem 4 //



// Problem 4 Abstractions //
let userNameLength = username => username.length <= 20 ? username : console.log("Please enter a username less than 20 characters.");
let userNameWhiteSpace = username => username[0] !== " " && username[username.length-1] !== " " ? username : console.log("Please do not use a space to start or end your username.");
let passwordFiveCharsOrMore = password => password.length >= 5 ? password : console.log("Please enter a password greater than five characters.");
let passwordNotUsername = (password, username) => password !== username ? password : console.log("Please enter a password that is not your username.");
let passwordWhiteSpace = password => password[0] !== " " && password[password.length-1] !== " " ? password : console.log("Please do not use a space to start or end your password.");