import { useMutation } from '@tanstack/react-query';
import { AUTH_API } from '../services/auth.service';

const useUserLogin = () => {
	return useMutation({
		mutationFn: async (loginData: {
			email: string;
			password: string;
			role: string;
		}) => AUTH_API.login(loginData),
	});
};

export { useUserLogin };
