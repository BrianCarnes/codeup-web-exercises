"use strict";
document.getElementById("button").addEventListener("click",turnButtonGreen);
function turnButtonGreen(event) {
	event.preventDefault();
	document.getElementById("button").style.width = "50px";
	document.getElementById("button").style.position = "relative";
	document.getElementById("button").style.left = "50%";
	document.getElementById("button").style.transform = "translateX(-50%)";
	document.getElementById("button").style.backgroundColor = "#44c08a";
	document.getElementById("button").style.borderRadius = "50%";
	document.getElementById("btntext").style.opacity = "0";
	document.getElementById("fa").style.opacity = "1";
}
