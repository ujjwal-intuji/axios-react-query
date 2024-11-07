import { useState } from 'react';

const AUTH_TOKEN_NAME = 'authToken';

export const useAuth = () => {
	const [authToken, setAuthToken] = useState<string | null>(
		localStorage.getItem(AUTH_TOKEN_NAME),
	);

	const login = (token: string) => {
		localStorage.setItem(AUTH_TOKEN_NAME, token);
		setAuthToken(token);
	};

	const logout = () => {
		localStorage.removeItem(AUTH_TOKEN_NAME);
		setAuthToken(null);
	};

	return {
		login,
		logout,
		authToken,
	};
};
