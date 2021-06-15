const container = document.querySelector('.container');

function makeBlock() {
	// !color = #E24E3F
	const div = document.createElement('div');
	div.style.height = '20px';
	div.style.width = '20px';
	div.style.border = '1px solid #E24E3F';
	div.style.zIndex = '1';
	div.style.backgroundColor = 'red';
	div.className = 'pixel';
	// container.appendChild(div);
	return div;
}

for (let i = 0; i < 300; i++) {
	container.appendChild(makeBlock());
}

const pixel = document.querySelector('.pixel');

container.addEventListener('click', e => {
	let color = e.target.style.backgroundColor;
	let borderColor = e.target.style.borderColor;

	console.log(borderColor);
	if (color === 'red') {
		color = 'white';
		borderColor = 'rgb(255, 255, 255)';
	} else {
		color = 'red';
		borderColor = 'rgb(226, 78, 63)';
	}

	// if(borderColor)

	e.target.style.backgroundColor = color;
	e.target.style.borderColor = borderColor;
});
