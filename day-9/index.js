const seatContainer = document.getElementById('seat-container');
const bs = document.querySelector('#booked-seats-info > span');
const rs = document.querySelector('#remaining-seats-info > span');

const createDiv = () => {
	const div = document.createElement('div');
	div.classList.add('available');

	return div;
};

// populate container
for (let i = 0; i < 36; i++) {
	seatContainer.appendChild(createDiv());
}

let seatBooked = 0;
let seatsLeft = 36;
let mouseDown = false;

seatContainer.addEventListener('mousedown', ({ target }) => {
	if (target.id === 'seat-container') return; // avoid toggling on the container

	mouseDown = true;
	target.classList.toggle('booked');
	if (target.classList.contains('booked')) {
		seatBooked++;
		seatsLeft--;
	} else {
		seatBooked--;
		seatsLeft++;
	}
	bs.innerText = seatBooked;
	rs.innerText = seatsLeft;
});

seatContainer.addEventListener('mouseup', ({ target }) => {
	if (target.id === 'seat-container') return; // avoid toggling on the container

	mouseDown = false;
});

seatContainer.addEventListener('mouseover', ({ target }) => {
	if (target.id === 'seat-container') return; // avoid toggling on the container
	if (!mouseDown) return;

	target.classList.toggle('booked');
	if (target.classList.contains('booked')) {
		seatBooked++;
		seatsLeft--;
	} else {
		seatBooked--;
		seatsLeft++;
	}
	bs.innerText = seatBooked;
	rs.innerText = seatsLeft;
});
