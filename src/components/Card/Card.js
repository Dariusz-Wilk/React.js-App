import styles from './Card.module.scss';
import clsx from 'clsx';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToFavorite } from '../../redux/cardsRedux';

const Card = props => {
	const dispatch = useDispatch();
	const [favorite, setFavorite] = useState(props.isFavorite);

	const handleClick = () => {
		setFavorite(!favorite);
		dispatch(addToFavorite(props.id));
	};

	return (
		<li className={styles.card} key={props.id}>
			{props.title}
			<span
				className={clsx(styles.fav, 'fa fa-star-o', !favorite || styles.isFav)}
				onClick={handleClick}></span>
		</li>
	);
};

export default Card;
