import { FC } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const Home: FC = () => {
	const navigate = useNavigate()

	const GoToAbout = () => {
		navigate('/about')
	}

	return(
		<>
			<section>
				<h2>Home</h2>
				<ul>
					<li>
						<Link to={ '/product/1' }>Product 1</Link>
					</li>
					<li>
						<Link to={ '/product/2' }>Product 2</Link>
					</li>
				</ul>
				<button onClick={ () => GoToAbout() }>About</button>
			</section>
		</>
	)
}