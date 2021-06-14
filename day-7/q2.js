/* 
  Write a JavaScript program to delete the rollno property from
  the following object. Also print the object before or after deleting
  the property. Sample object: 
  var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; 
*/

function deleteProperty(obj, propetyToDel) {
	for (let property in obj) {
		if (property == propetyToDel) {
			delete obj[property];
		}
	}

	return obj;
}

var studentA = { name: 'David Rayy', sclass: 'VI', rollno: 12 };
console.log(studentA);
studentA = deleteProperty(studentA, 'rollno');
console.log(studentA);
