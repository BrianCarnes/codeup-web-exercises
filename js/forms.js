"use strict";
document.getElementById("button").addEventListener("click",turnButtonGreen);
function turnButtonGreen(event) {
	event.preventDefault();
	document.getElementById("button").style.width = "50px";
	document.getElementById("button").style.position = "relative";
	document.getElementById("button").style.left = "50%";
	document.getElementById("button").style.transform = "translateX(-50%)";
	document.getElementById("button").style.backgroundColor = "#ecf0f3";
	document.getElementById("button").style.borderRadius = "50%";
	document.getElementById("btntext").style.opacity = "0";
	document.getElementById("fa").style.opacity = "1";
}

let radios = document.querySelectorAll('input[type=radio][value="d"]');
let other = document.getElementById("d");
let options = document.getElementById("options");
let radiogroup = document.getElementById("radiogroup");

other.addEventListener("click", function () {
	options.classList.toggle("show");
	radiogroup.classList.toggle("show");
});


// radios.forEach(function(radio) {
// 	radio.addEventListener("change", function () {
// 		options.classList.toggle("show");
// 	});
// });
