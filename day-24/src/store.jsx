import React, { useState, createContext } from 'react';

const initialUser = {
	name: null,
	favoriteEmoji: null,
	isLoggedin: false,
};

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState(initialUser);

	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
};
