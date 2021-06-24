const container = document.querySelector('.container');

let images = [
	'bokuto.jpg',
	'kaori.png',
	'naruto.png',
	'miku.jpg',
	'nishinoya.png',
	'shoyo.png',
];

images = shuffleArray([...images, ...images]);
let openendCardsCount = 0;
let openedCards = [];

const createCard = image => {
	const card = document.createElement('div');
	card.classList.add('card');
	card.setAttribute('img', image);

	const cardFront = document.createElement('div');
	const cardBack = document.createElement('div');

	cardFront.classList.add('card-front');
	cardBack.classList.add('card-back');

	// image
	const img = document.createElement('img');
	img.src = `./assets/${image}`;
	img.classList.add('img');
	cardBack.appendChild(img);

	card.appendChild(cardFront);
	card.appendChild(cardBack);
	return card;
};

const fillContainer = number => {
	// for (let i = 0; i < number; i++) {
	// 	container.appendChild(createCard());
	// }

	images.forEach(img => container.appendChild(createCard(img)));
};
fillContainer(12);

// evnet listener
const cards = document.querySelectorAll('.card');
cards.forEach(card => card.addEventListener('click', revealCard));

function revealCard(e) {
	console.log(openedCards);
	if (openendCardsCount == 2) return;
	console.log(this);
	const element = this;
	element.classList.toggle('show');
	openendCardsCount++;
	let temp = openedCards[0];
	if (
		openedCards.length &&
		openedCards[0].getAttribute('img') === element.getAttribute('img')
	) {
		setTimeout(() => {
			element.classList.add('hide');
			temp.classList.add('hide');
		}, 1000);
		openedCards = [];
	} else {
		openedCards.push(element);
	}
	setTimeout(() => {
		openendCardsCount--;
		element.classList.remove('show');
		openedCards = openedCards.filter(card => card != element);
	}, 3000);
}

function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}
