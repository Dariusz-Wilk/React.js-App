import styles from './Column.module.scss';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import { useSelector } from 'react-redux';
// import { getFilteredCards } from '../../redux/store';
import { createSelector } from 'reselect';
import React from 'react';

const selectCards = (state, id) =>
	state.cards.filter(card => card.columnId === id);

const selectCardsByColumn = id =>
	createSelector(
		state => selectCards(state, id),
		cards => {
			return cards;
		}
	);

const Column = React.memo(
	props => {
		const cards = useSelector(selectCardsByColumn(props.id));

		// const cards = useSelector(state => getFilteredCards(state, props.id));
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
	},
	oldProps => {
		console.log(oldProps);
	}
);

export default Column;
