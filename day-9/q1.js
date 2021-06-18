const person = {
	name: 'john',
	greet(message) {
		console.log(`${message} ${this.name}`);
	},
};

const anotherPerson = {
	name: 'horse',
	age: 18,
};

person.greet.call(anotherPerson, 'hello');
person.greet.apply(anotherPerson, ['hii']);

const bindedGreet = person.greet.bind(anotherPerson, 'my name is');
bindedGreet();
