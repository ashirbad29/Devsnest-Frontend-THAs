const progress = document.querySelector('.progress');
const questionName = document.querySelector('.question');
const options = document.querySelectorAll('.option');
const nextQueBtn = document.querySelector('.btn');

const quesNo = document.querySelector('.ques-no');
const totalQues = document.querySelector('.total-ques');

// Global vars
let currentQuestionIndex = 0;

const questionsData = [
	{
		title: 'What does CSS stands for?',
		option1: 'Common Style Sheet',
		option2: 'Colorful Style Sheet',
		option3: 'Computer Style Sheet',
		option4: 'Cascading Style Sheet',
		correctAns: 'Cascading Style Sheet',
	},
	{
		title: 'Inventer of NodeJS?',
		option1: 'Elon Musk',
		option2: 'Modi G',
		option3: 'Bill Gates',
		option4: 'Ryan Dahl',
		correctAns: 'Ryan Dahl',
	},
	{
		title: 'VS code stand for?',
		option1: 'Vim Studio Code',
		option2: 'Very Serious Code',
		option3: 'Visual Studio Code',
		option4: 'Vivo Studio Code',
		correctAns: 'Visual Studio Code',
	},
];

let currProgess = Math.floor(100 / questionsData.length);

function renderQuestion(questionData, n) {
	questionName.innerText = `${n}.${questionData.title}`;

	options[0].innerHTML = questionData.option1;
	options[1].innerHTML = questionData.option2;
	options[2].innerHTML = questionData.option3;
	options[3].innerHTML = questionData.option4;

	options[0].className = 'option';
	options[1].className = 'option';
	options[2].className = 'option';
	options[3].className = 'option';

	quesNo.innerText = n;
	totalQues.innerText = questionsData.length;
	progress.style.width = `${currProgess}%`;
}

// initial render
renderQuestion(questionsData[0], 1);

nextQueBtn.addEventListener('click', () => {
	if (currentQuestionIndex == questionsData.length) return;
	currentQuestionIndex++;

	currProgess += Math.floor(100 / questionsData.length);
	if (currentQuestionIndex == questionsData.length - 1) currProgess = 100;

	renderQuestion(questionsData[currentQuestionIndex], currentQuestionIndex + 1);
});

// finding correct ans;
options.forEach(option => {
	option.addEventListener('click', ({ target }) => {
		const currentQues = questionsData[currentQuestionIndex];
		if (currentQues.correctAns === target.innerText) {
			target.classList.add('correct');
		} else {
			target.classList.add('wrong');
			options.forEach(option => {
				if (option.innerText === currentQues.correctAns) {
					option.classList.add('correct');
				}
			});
		}
	});
});
