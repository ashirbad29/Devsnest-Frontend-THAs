/* 
  Write a JavaScript function to clone an array
*/

function cloneArr(arr) {
	let clone = [];
	for (let val of arr) {
		clone.push(val);
	}

	return clone;
}

// another method
function cloneArr2(arr) {
	const clone = [...arr];
	return clone;
}

// another
const cloneArr3 = arr => arr.slice(0);

// testing
console.log(cloneArr([1, 2, 3, 4]));
console.log(cloneArr2(['😁', 'hello', 'world', 4]));
console.log(cloneArr([[1, 2], { name: 'goodName' }, 'noice']));
