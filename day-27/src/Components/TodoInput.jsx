import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, loadTodo } from '../actions/action';

const TodoInput = () => {
	const [input, setInput] = useState('');
	const dispatch = useDispatch();
	const inputRef = useRef(null);

	return (
		<div>
			<form
				action=''
				onSubmit={e => {
					e.preventDefault();
					dispatch(addTodo({ title: input, done: false }));
					setInput('');
					inputRef.current.focus();
				}}
			>
				<input
					type='text'
					ref={inputRef}
					value={input}
					required
					onChange={e => setInput(e.target.value)}
				/>
				<button type='submit'>Add Todo</button>
			</form>
			<button onClick={() => dispatch(loadTodo())}>Load Todo</button>
		</div>
	);
};

export default TodoInput;
