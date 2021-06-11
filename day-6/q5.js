/* 
  Write a JavaScript program to find the most frequent item of an array
*/

/**
 * @param {Array} arr
 */
function mostFrequent(arr) {
	let mostFrequent,
		frequency = -1;

	for (let val of arr) {
		let freq = 0;
		for (let innerVal of arr) {
			if (val === innerVal) freq++;
		}

		if (freq > frequency) {
			mostFrequent = val;
			frequency = freq;
		}
	}

	return { mostFrequent, frequency };
}

const arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
console.log(mostFrequent(arr));
