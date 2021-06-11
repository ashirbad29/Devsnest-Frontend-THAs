const firstInput = document.getElementById('one');
const secondInput = document.getElementById('two');
const controls = document.querySelector('.controls');
const resultBox = document.getElementById('result-box');

controls.addEventListener('click', controlHandler);

function controlHandler(e) {
	const valOne = Number(firstInput.value);
	const valTwo = Number(secondInput.value);

	// console.log(valOne, valTwo);

	if (!valOne || !valTwo) {
		resultBox.innerText = 'Provide a valid input';
		return;
	}

	const cmd = e.target.innerText;
	// console.log(cmd);
	switch (cmd) {
		case 'Add':
			helper(valOne + valTwo);
			break;
		case 'Subtract':
			helper(valOne - valTwo);
			break;
		case 'Multiply':
			helper(valOne * valTwo);
			break;
		case 'Division':
			helper(valOne / valTwo);
			break;
		default:
			console.log('default');
	}
}

function helper(res) {
	console.log(res);
	resultBox.innerText = res;
}
