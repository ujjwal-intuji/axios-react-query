import { Link } from 'react-router-dom';

export function Homepage() {
	return (
		<section>
			<div>
				<h1>Available Pages:</h1>
				<Link to='/login' className='text-blue-600 font-medium'>
					Login page
				</Link>
			</div>
		</section>
	);
}
