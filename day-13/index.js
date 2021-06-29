const quoteText = document.querySelector('.quote-text');
const authorName = document.querySelector('.author');

document.addEventListener('click', getQuotes);

async function getQuotes(e) {
	const response = await fetch('https://api.quotable.io/random');
	const { content, author } = await response.json();

	quoteText.innerText = `"${content}"`;
	authorName.innerText = `- ${author}`;
}
