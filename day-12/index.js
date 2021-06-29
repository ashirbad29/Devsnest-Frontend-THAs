const todoContainer = document.querySelector('.todo-container');
const todoBtn = document.querySelector('.todo-btn');
todoBtn.addEventListener('click', addTodo);

let todoItems = [];

// local storage
if (localStorage.getItem('todoItems')) {
	todoItems = JSON.parse(localStorage.getItem('todoItems'));
	todoItems.forEach(todo => {
		renderTodo(todo);
	});
}

function Todo(task) {
	this.task = task;
	this.id = Date.now();
	this.checked = false;
}

function addTodo() {
	const input = document.querySelector('.todo-input');
	const text = input.value.trim();
	if (text === '') return;

	input.value = '';
	input.focus();

	const todo = new Todo(text);
	todoItems.push(todo);
	console.log(todoItems);
	renderTodo(todo);
	localStorage.setItem('todoItems', JSON.stringify(todoItems));
}

function renderTodo(todo) {
	const isChecked = todo.checked ? 'done' : '';
	const div = document.createElement('div');
	div.setAttribute('class', `todo-item ${isChecked}`);
	div.setAttribute('data-key', todo.id);

	div.innerHTML = `
    <p>${todo.task}</p>
    <div>
      <span class='mark-btn' >X</span>
      <span class='delete-btn' >D</span>
    </div>
  `;

	const item = document.querySelector(`[data-key='${todo.id}']`);
	if (item) {
		todoContainer.replaceChild(div, item);
	} else {
		todoContainer.append(div);
	}
	return div;
}

// marking a todo as completed
todoContainer.addEventListener('click', e => {
	if (e.target.classList.contains('mark-btn')) {
		const itemKey = e.target.parentElement.parentElement.dataset;
		console.log(e.target);
		console.log(itemKey.key);
		updateTodo(itemKey.key);
	} else if (e.target.classList.contains('delete-btn')) {
		const itemKey = e.target.parentElement.parentElement.dataset;
		deleteTodo(itemKey.key, e.target.parentElement.parentElement);
	}
});

function updateTodo(key) {
	const index = todoItems.findIndex(item => item.id === Number(key));

	todoItems[index].checked = !todoItems[index].checked;
	renderTodo(todoItems[index]);
	localStorage.setItem('todoItems', JSON.stringify(todoItems));
}

function deleteTodo(key, child) {
	console.log(todoItems);
	todoItems = todoItems.filter(todo => todo.id !== Number(key));
	console.log(todoItems);
	todoContainer.removeChild(child);
	localStorage.setItem('todoItems', JSON.stringify(todoItems));
}
