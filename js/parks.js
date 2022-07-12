// 1. get a reference for the anchor
const myToggle = document.querySelector("#inviso-toggle");
const myTiggle = document.querySelector("#LCHighlight");
const h3finder = document.querySelectorAll("h3");
const ulfinder = document.querySelectorAll("ul");

// 2. add a click event listener to the anchor
myToggle.addEventListener("click", function(event) {
	// 3. in the event listener function, toggle the class invisible
	// 3.a. get all the dds
	// 3.b. for each dd, toggle its invisible class
	const myDDs = document.querySelectorAll("dd");
	myDDs.forEach(function(dd) {
		dd.classList.toggle("invisible");
	})
});

myTiggle.addEventListener("click", function(event) {
	const myULs = document.querySelectorAll("ul")
	myULs.forEach(function(ul){
		ul.lastElementChild.classList.toggle("highlight");
	})

})

h3finder[0].addEventListener("click",function(event){
	const sibilingULs = h3finder[0].nextElementSibling;

	sibilingULs.classList.toggle("boldener")
})
h3finder[1].addEventListener("click",function(event){
	const sibilingULs = h3finder[1].nextElementSibling;

	sibilingULs.classList.toggle("boldener")
})
h3finder[2].addEventListener("click",function(event){
	const sibilingULs = h3finder[2].nextElementSibling;

	sibilingULs.classList.toggle("boldener")
})

ulfinder[0].addEventListener("click",function(event) {
	ulfinder[0].firstElementChild.classList.toggle("colorfool");
});
ulfinder[1].addEventListener("click",function(event) {
	ulfinder[1].firstElementChild.classList.toggle("colorfool");
});
ulfinder[2].addEventListener("click",function(event) {
	ulfinder[2].firstElementChild.classList.toggle("colorfool");
});

// BONUS
// 1. target all dt elements
const myDTs = document.querySelectorAll("dt");
myDTs.forEach(function(dt) {
	// 2. add a click event listener to each dt element
	dt.addEventListener("click", function(event) {
		// 3. when it is clicked, turn its background color to green
		// this.style.backgroundColor = "green";
		this.classList.toggle("green-background");
	});
})