import React, { useContext } from 'react';
import { UserContext } from '../store';

const Dashboard = () => {
	const { user } = useContext(UserContext);

	return (
		<div>
			<h1>
				Dashboard for {user.name} {user.favoriteEmoji}{' '}
			</h1>
		</div>
	);
};

export default Dashboard;
