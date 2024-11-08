import axios, { AxiosResponse, AxiosError } from 'axios';

import { WEBSITE_BASE_CONFIG } from '@/constants';
import { HTTP_ERROR_CODES } from '@/constants/http.constant';

const baseConfig = {
	withCredentials: true,
	baseURL: WEBSITE_BASE_CONFIG.BACKEND_URL,
};

export const instanceWithInterceptor = axios.create(baseConfig);
export const instanceWithoutInterceptor = axios.create(baseConfig);

instanceWithInterceptor.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem('authToken'); // @TODO: Use presisted state from Zustand.
		if (token) {
			config.headers['Authorization'] = `Bearer ${token}`;
		}
		console.log('Request made with ', config);
		return config;
	},
	(error: AxiosError) => {
		console.error('Request Error:', error);
		return Promise.reject(new Error('something bad happened'));
	},
);

instanceWithoutInterceptor.interceptors.response.use(
	(response: AxiosResponse) => {
		return response;
	},
	(error: AxiosError) => {
		if (error.response) {
			const status = error.response.status;
			const message =
				(error.response.data as { message?: string }).message ??
				'An error occurred';

			switch (status) {
				case HTTP_ERROR_CODES.UNAUTHORIZED:
					console.error('Unauthorized Access');
					break;
				default:
					console.error('⚠️ Unexpected Error:', message);
					break;
			}
		} else {
			console.error('Network error: ', error.message);
		}
		return Promise.reject(error);
	},
);
