

let myImage = document.querySelector('img');

myImage.onclick = function() {
	let mySrc = myImage.getAttribute('src');
	if(mySrc === 'test-site/images/my-test-image-2.jpg') {
		myImage.setAttribute('src', 'test-site/images/my-test-image.jpg');
	} else {
		myImage.setAttribute('src', 'test-site/images/my-test-image-2.jpg');
	}
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
	let myName = prompt('Please enter your name.');
	if(!myName) {
		setUserName();
	} else {
		localStorage.setItem('name', myName);
		myHeading.innerHTML = 'A Cart Cairo Web Dev, ' + myName;
	}
}

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	let storedName = localStorage.getItem('name');
	myHeading.innerHTML = "A Cart Cairo Web Dev, " + storedName;
}

myButton.onclick = function() {
	setUserName();
}