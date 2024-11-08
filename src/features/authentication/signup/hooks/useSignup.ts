import { useMutation } from '@tanstack/react-query';
import { AUTH_API } from '../services/signup.service';
import { TSignUpRequestSchema } from '../schemas/signup.schema';

type SignupData = TSignUpRequestSchema & { role: string };

const useUserSignup = () => {
	return useMutation({
		mutationFn: async (signupData: SignupData) => AUTH_API.signup(signupData),
	});
};

export { useUserSignup };
