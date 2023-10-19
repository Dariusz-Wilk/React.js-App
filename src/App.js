import Container from './components/Container/Container';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Favorite from './components/Favorite/Favorite';
import About from './components/About/About';

const App = () => {
	return (
		<main>
			<Navigation />
			<Container>
				<Home />
				<Favorite />
				<About />
			</Container>
		</main>
	);
};

export default App;
