import { AxiosError } from 'axios';

interface ErrorResponse {
	data?: {
		message?: string;
	};
	errors?: Record<string, string[]>; // Record with keys as string and values as an array of error messages
	payload?: {
		error?: string;
		error_description?: string;
	};
	message?: string;
}

export const handleApiError = (error: unknown): string => {
	if (error instanceof AxiosError) {
		if (!error.response && error.code === 'ERR_NETWORK') {
			return error.message;
		}

		const errorResponse = error.response?.data as ErrorResponse;

		if (errorResponse.errors) {
			// Access the first error message from the first field in the errors object
			const firstErrorKey = Object.keys(errorResponse.errors)[0]; // Get the first key
			const firstErrorMessage = errorResponse.errors[firstErrorKey][0]; // Get the first message from the array
			return firstErrorMessage;
		}

		if (errorResponse.payload?.error === 'expired_token') {
			return 'token has expired, please log in again.';
		}

		const message =
			errorResponse.data?.message ??
			errorResponse.payload?.error_description ??
			errorResponse.message ??
			error.message;

		// Return the actual message or the fallback error message
		return message;
	} else {
		return '';
	}
};
