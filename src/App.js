import Hero from './components/Hero/Hero';
import SearchForm from './components/SearchForm/SearchForm';
import List from './components/List/List';
import Container from './components/Container/Container';
import Navigation from './components/Navigation/Navigation';

const App = () => {
	return (
		<main>
			<Navigation />
			<Container>
				<Hero />
				<SearchForm />
				<List />
			</Container>
		</main>
	);
};

export default App;
