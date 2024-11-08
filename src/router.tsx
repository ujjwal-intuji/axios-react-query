import { createBrowserRouter } from 'react-router-dom';

import { Homepage, LoginPage } from '@/features';

export const routerRoutes = createBrowserRouter([
	{
		path: '/',
		element: <Homepage />,
	},
	{
		path: '/login',
		element: <LoginPage />,
	},
]);
