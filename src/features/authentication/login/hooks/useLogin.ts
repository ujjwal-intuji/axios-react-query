import { useMutation } from '@tanstack/react-query';
import { AUTH_API } from '../services/auth.service';
import { TLoginRequestSchema } from '../validators';

const useUserLogin = () => {
	return useMutation({
		mutationFn: async (loginData: TLoginRequestSchema) =>
			AUTH_API.login(loginData),
	});
};

export { useUserLogin };
