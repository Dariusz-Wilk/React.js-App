import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';

const Favorite = () => {
	return (
		<main>
			<PageTitle>Favorite</PageTitle>
			<p className={styles.text}>Your favorite things to do soon</p>
		</main>
	);
};

export default Favorite;
