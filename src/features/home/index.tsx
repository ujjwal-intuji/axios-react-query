import { Link } from 'react-router-dom';

const AVAILABLE_PAGES = ['/signup', '/login'];

export function Homepage() {
	const RenderAvailableRoutes = () =>
		AVAILABLE_PAGES.map((route) => (
			<Link to={route} key={route} className='text-blue-600 font-medium'>
				{route}
			</Link>
		));

	return (
		<section>
			<div className='p-5'>
				<h1 className='mb-2'>Available Pages:</h1>
				<div className='flex gap-1 flex-col'>
					<RenderAvailableRoutes />
				</div>
			</div>
		</section>
	);
}
