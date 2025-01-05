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

	const login = (token, refreshToken) => {
		localStorage.setItem('token', token);
		localStorage.setItem('refreshToken', refreshToken);
		setAuthState({ token, user: jwtDecode(token) });
	};

	const logout = () => {
		localStorage.removeItem('token');
		setAuthState({ token: null, user: null });
	};

	useEffect(() => {
		if (authState.token) {
			const decoded = jwtDecode(authState.token);

			setAuthState({
				...authState,
				user: decoded,
			});
		}
	}, [authState.token]);

	return (
		<AuthContext.Provider value={{ authState, setAuthState, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export { AuthContext, AuthProvider };
