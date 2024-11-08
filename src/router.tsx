import { createBrowserRouter } from 'react-router-dom';

import { Homepage, LoginPage, SignupPage } from '@/features';

export const routerRoutes = createBrowserRouter([
	{
		path: '/',
		element: <Homepage />,
	},
	{
		path: '/login',
		element: <LoginPage />,
	},
	{
		path: '/signup',
		element: <SignupPage />,
	},
]);
