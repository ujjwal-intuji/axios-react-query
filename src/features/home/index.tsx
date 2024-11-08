import { Link } from 'react-router-dom';

export function Homepage() {
	return (
		<section>
			<div>
				<h1>Login</h1>
				<Link to='/login'>Login page</Link>
			</div>
		</section>
	);
}
