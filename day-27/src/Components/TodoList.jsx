import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo } from '../actions/action';

const TodoList = () => {
	const todos = useSelector(state => state.todo);
	const dispatch = useDispatch();

	return (
		<div className='todo__container'>
			{todos.map((todo, idx) => (
				<div className='todo__item' key={idx}>
					<span>{todo.title}</span>
					<button onClick={() => dispatch(removeTodo(idx))}>del</button>
				</div>
			))}
		</div>
	);
};

export default TodoList;
