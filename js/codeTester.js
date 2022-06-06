function midgard () {
	let askUser = confirm("Wanna enter a number?")
	if (askUser) {
		let userNum = parseFloat(prompt("Enter the number"))
		console.log(typeof userNum)
		if (isNaN(userNum) === false) {
			if (userNum % 2 === 0) {
				alert(userNum + " is even")
			} else {
				alert(userNum + " is odd")
			}
			let add100 = +userNum + 100
			alert(userNum + " + 100 = " + add100)
			if (userNum > 0) {
				alert(userNum + " is positive")
			} else {
				alert(userNum + " is negative")
			}
		} else {
			alert("not a number")
		}
	}
}
midgard()