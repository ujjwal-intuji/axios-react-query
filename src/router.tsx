import { createBrowserRouter } from 'react-router-dom';

import { Homepage } from '@/pages';

export const routerRoutes = createBrowserRouter([
	{
		path: '/',
		element: <Homepage />,
	},
]);
