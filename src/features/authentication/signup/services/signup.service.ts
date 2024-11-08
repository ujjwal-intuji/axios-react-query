import { z } from 'zod';

import {
	SignUpRequestSchema,
	SignUpResponseSchema,
} from '../validators/signup.schema';
import { api } from '@/utils/api';
import { API_ENDPOINTS, HTTP_METHODS } from '@/constants';

const signup = api<
	z.infer<typeof SignUpRequestSchema>,
	z.infer<typeof SignUpResponseSchema>
>({
	type: 'public',
	method: HTTP_METHODS.POST,
	requestSchema: SignUpRequestSchema,
	responseSchema: SignUpResponseSchema,
	path: API_ENDPOINTS.AUTHENTICATION.SIGNUP,
});

export const AUTH_API = { signup };
