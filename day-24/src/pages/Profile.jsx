import React, { useContext } from 'react';
import { UserContext } from '../store';

const Profile = () => {
	const { user } = useContext(UserContext);
	return (
		<div>
			<h1>{user.name}</h1>
			<p>Favorite emoji is: {user.favoriteEmoji}</p>
		</div>
	);
};

export default Profile;
