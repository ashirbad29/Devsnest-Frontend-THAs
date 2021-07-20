import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from './store';

const Nav = () => {
	const { user } = useContext(UserContext);

	return (
		<nav>
			<ul className='nav-ul-container'>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/about'>About</Link>
				</li>
				{user.isLoggedin && (
					<li>
						<Link to='/profile'>Profile</Link>
					</li>
				)}
				{user.isLoggedin && <Link to='/dashboard'>Dashboard</Link>}
			</ul>
		</nav>
	);
};

export default Nav;
