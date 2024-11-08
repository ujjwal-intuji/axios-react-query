import { z } from 'zod';

import {
	LoginRequestSchema,
	LoginResponseSchema,
} from '../validators/login.schema';
import { api } from '@/utils/api';
import { API_ENDPOINTS, HTTP_METHODS } from '@/constants';

const login = api<
	z.infer<typeof LoginRequestSchema>,
	z.infer<typeof LoginResponseSchema>
>({
	type: 'public',
	method: HTTP_METHODS.POST,
	requestSchema: LoginRequestSchema,
	responseSchema: LoginResponseSchema,
	path: API_ENDPOINTS.AUTHENTICATION.LOGIN,
});

export const AUTH_API = { login };
