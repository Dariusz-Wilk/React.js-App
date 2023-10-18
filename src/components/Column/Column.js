import styles from './Column.module.scss';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import { useSelector } from 'react-redux';
import { getFilteredCards } from '../../redux/store';
// import { createSelector } from 'reselect';
// import React from 'react';

const Column = props => {
	// const phrase = useSelector(state => state.searchPhrase);

	const cards = useSelector(state => getFilteredCards(state, props.id));
	console.log('Column render');

	return (
		<article className={styles.column}>
			<h2 className={styles.title}>
				<span className={styles.icon + ' fa fa-' + props.icon}></span>
				{props.title}
			</h2>
			<ul className={styles.cards}>
				{cards.map(card => (
					<Card key={card.id} title={card.title} />
				))}
			</ul>
			<CardForm columnId={props.id} columnTitle={props.title} />
		</article>
	);
};

export default Column;
