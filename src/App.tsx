import { Link, Route, Routes } from "react-router-dom"

function App() {

  return (
    <>
			<ul>
				<li>
					<Link to={ '/' } >Home</Link>
					<Link to={ '/about' }>About</Link>
				</li>
			</ul>

			<Routes>
				<Route path="/" element={ <Home /> }/>
				<Route path="/about" element={ <About /> }/>
			</Routes>
    </>
  )
}

const Home = () => {
	return(
		<>
			<h2>Home</h2>
		</>
	)
}

const About = () => {
	return(
		<>
			<h2>About</h2>
		</>
	)
}

export default App
