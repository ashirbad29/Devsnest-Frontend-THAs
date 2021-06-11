/* 
  Q. Write a JavaScript function to check whether an `input` is an array or not
*/

function is_array(arr) {
	return Array.isArray(arr);
}

console.log(is_array([1, 2, 3]));
console.log(is_array('hello world'));
console.log(is_array(29));
console.log(is_array({ name: 'yo' }));
