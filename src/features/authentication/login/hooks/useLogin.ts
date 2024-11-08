import { useMutation } from '@tanstack/react-query';
import { AUTH_API } from '../services/auth.service';
import { TLoginRequestSchema } from '../schemas';

type LoginData = TLoginRequestSchema & { role: string };

const useUserLogin = () => {
	return useMutation({
		mutationFn: async (loginData: LoginData) => AUTH_API.login(loginData),
	});
};

export { useUserLogin };
