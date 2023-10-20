import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';
import { getFavCards } from '../../redux/store';

const Favorite = () => {
	const favCards = useSelector(getFavCards);

	if (favCards.length > 0) {
		return (
			<main className={styles.main}>
				<PageTitle>Favorite</PageTitle>
				<p className={styles.text}>Your favorite things to do soon</p>

				<article className={styles.column}>
					<ul className={styles.cards}>
						{favCards.map(card => (
							<Card
								key={card.id}
								title={card.title}
								isFavorite={card.isFavorite}
								id={card.id}
							/>
						))}
					</ul>
				</article>
			</main>
		);
	} else {
		return (
			<main className={styles.main}>
				<PageTitle>Favorite</PageTitle>
				<p className={styles.text}>
					Add at least one card to favorite section...
				</p>
			</main>
		);
	}
};

export default Favorite;
