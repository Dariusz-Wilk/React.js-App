import Container from './components/Container/Container';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Favorite from './components/Favorite/Favorite';
import About from './components/About/About';
import PageNotFound from './components/PageNotFound/PageNotFound';

import { Routes, Route } from 'react-router-dom';

const App = () => {
	return (
		<main>
			<Navigation />
			<Container>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/favorite" element={<Favorite />} />
					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</Container>
		</main>
	);
};

export default App;
