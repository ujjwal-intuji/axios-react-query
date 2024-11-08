import { z } from 'zod';
import { AxiosRequestConfig, Method } from 'axios';

import {
	instanceWithInterceptor,
	instanceWithoutInterceptor,
} from './axiosInstance';

interface APICallPayload<Request, Response> {
	path: string;
	method: Method;
	type?: 'protected' | 'public';
	requestSchema: z.ZodType<Request>;
	responseSchema: z.ZodType<Response>;
}

export function api<Request, Response>({
	type = 'protected',
	path,
	method,
	requestSchema,
	responseSchema,
}: APICallPayload<Request, Response>) {
	return async (requestPayload: Request, id?: string) => {
		requestSchema.parse(requestPayload);

		const url = (() => {
			if (id) {
				// Check if the path contains ':userId' and replace it, otherwise append the id at the end
				return path.includes(':userId')
					? path.replace(':userId', id)
					: `${path}/${id}`;
			}

			if (requestPayload && method === 'GET') return `${path}/${requestPayload}`;

			return path;
		})();

		const data =
			requestPayload &&
			(method === 'POST' ||
				method === 'PUT' ||
				method === 'PATCH' ||
				method === 'DELETE')
				? requestPayload
				: null;

		const config: AxiosRequestConfig = {
			method,
			url,
			data,
		};

		const response =
			type === 'protected'
				? await instanceWithInterceptor(config)
				: await instanceWithoutInterceptor(config);

		const result = responseSchema.safeParse(response.data);

		if (!result.success) {
			console.error('🚨 Safe-Parsing Failed ', result.error);
			return Promise.reject(new Error(result.error.message));
		}

		return result.data;
	};
}
