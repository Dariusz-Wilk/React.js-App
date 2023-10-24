import styles from './Card.module.scss';
import clsx from 'clsx';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToFavorite, removeCard } from '../../redux/cardsRedux';

const Card = props => {
	const dispatch = useDispatch();
	const [favorite, setFavorite] = useState(props.isFavorite);

	const handleClick = () => {
		setFavorite(!favorite);
		dispatch(addToFavorite(props.id));
	};

	const deleteCard = () => {
		dispatch(removeCard(props.id));
	};

	return (
		<li className={styles.card} key={props.id}>
			{props.title}
			<div className="iconBox">
				<span
					className={clsx(
						styles.fav,
						'fa fa-star-o',
						!favorite || styles.isFav
					)}
					onClick={handleClick}></span>

				<span className={props.trash + styles.del} onClick={deleteCard}></span>
			</div>
		</li>
	);
};

export default Card;
