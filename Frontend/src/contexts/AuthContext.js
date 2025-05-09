import { jwtDecode } from 'jwt-decode';
import { createContext, useEffect, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [authState, setAuthState] = useState(() => {
		const token = localStorage.getItem('token');

		return {
			token,
			user: token ? jwtDecode(token) : null,
		};
	});

	const login = (token) => {
		localStorage.setItem('token', token);
		setAuthState({ token, user: jwtDecode(token) });
	};

	const logout = () => {
		localStorage.removeItem('token');
		setAuthState({ token: null, user: null });
	};

	return (
		<AuthContext.Provider value={{ authState, setAuthState, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export { AuthContext, AuthProvider };
