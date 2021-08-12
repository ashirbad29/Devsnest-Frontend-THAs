import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { toggleVisibility } from '../redux/slices/cartSlice';
import '../styles/sideBar.css';

const SideBar = () => {
	const dispatch = useDispatch();
	const { isSidebarVisible, cartItems } = useSelector(state => state.cart);
	return (
		<div
			className='sidebar-container'
			style={{ width: isSidebarVisible ? '400px' : '0' }}
		>
			<div onClick={() => dispatch(toggleVisibility())}>X</div>
			{cartItems.map((val, idx) => (
				<div className='sidebar-item' key={idx}>
					{JSON.stringify(val)}
				</div>
			))}
		</div>
	);
};

export default SideBar;
