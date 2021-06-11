/* 
  Write a simple JavaScript program to join all elements
  of the following array into a string.
*/

function joinArr(arr) {
	return arr.join();
}

function joinArr2(arr) {
	let str = '';
	for (let [idx, val] of arr.entries()) {
		str += String(val);
		if (idx != arr.length - 1) str += ',';
	}

	return str;
}

console.log(joinArr(['Red', 'Green', 'White', 'Black']));
console.log(joinArr2(['Red', 'Green', 'White', 'Black']));
