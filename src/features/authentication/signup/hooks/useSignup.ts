import { useMutation } from '@tanstack/react-query';
import { AUTH_API } from '../services/signup.service';
import { TSignUpRequestSchema } from '../validators/signup.schema';

const useUserSignup = () => {
	return useMutation({
		mutationFn: async (signupData: TSignUpRequestSchema) =>
			AUTH_API.signup(signupData),
	});
};

export { useUserSignup };
