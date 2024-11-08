import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from '@/app.tsx';
import '@/styles/globals.css';

import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<Toaster position='top-center' reverseOrder={false} />
			<App />
		</QueryClientProvider>
	</StrictMode>,
);
