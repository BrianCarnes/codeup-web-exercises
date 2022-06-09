let Buttons = document.querySelectorAll(".num-button");
let allButtons = document.querySelectorAll(".button");
let resultBox = document.querySelector("#result-box");
let clearButton = document.querySelector('#clear');
let percentageButton = document.querySelector("#percentage")
let plusmnButton = document.querySelector("#plusmn")

let total = document.querySelector("#total");

let ButtonSpread = [...Buttons];
let allButtonSpread = [...allButtons];

// Accept Number Inputs
ButtonSpread.forEach((button, i) => {
	button.addEventListener("click", () => {
		// Inner Values for calculator stored as a string

		if (resultBox.innerHTML === "0") {
			resultBox.innerHTML = "";
		}

		let value = Buttons[i].innerHTML;
		resultBox.innerHTML += value;
	});
});

// Function to evaluate Strings
let evaluate = (buttonsCombined) => {
	return new Function('return ' + buttonsCombined)();
}


// To calculate All Input
total.addEventListener('click', () => {
	let allInputs = resultBox.innerHTML;
	resultBox.innerHTML = evaluate(allInputs);
})

// Clear all Inputs
clearButton.addEventListener('click', () => {
	resultBox.innerHTML = "0";
})

// Change to percentage
percentageButton.addEventListener('click', () => {
	resultBox.innerHTML = Number(resultBox.innerHTML.replace("%", "") / 100).toString();
})


// Change sign
plusmnButton.addEventListener('click', () => {
	resultBox.innerHTML = Number(resultBox.innerHTML.replace("&plusmn", "") * -1).toString();
})

// Add Css Style Animation
allButtonSpread.forEach((button, i) => {
	button.addEventListener('click', () => {
		let element = allButtons[i];
		element.style.boxShadow = 'inset -6px -6px 16px 0 rgba(255, 255, 255, .5), inset 6px 6px 16px 0 rgba(209, 205, 199, .5)';

		setTimeout(function () {
			element.style.boxShadow = " 6px 6px 16px 0 rgba(209, 205, 199, .5),-6px -6px 16px 0 rgba(255, 255, 255, .5)"
		}, 0o300);
	})
})



