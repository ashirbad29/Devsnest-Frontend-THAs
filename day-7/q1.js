/*
  1. Write a JavaScript program to list the properties of a JavaScript object. 
  Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; 
  Sample Output: name,sclass,rollno

*/

let student = { name: 'David Rayy', sclass: 'VI', rollno: 12 };

// method 1
console.log(Object.keys(student)); // [ 'name', 'sclass', 'rollno' ]

// method 2
for (let key in student) {
	console.log(key); // name sclass rollno
}
