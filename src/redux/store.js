/* eslint-disable eqeqeq */
import { createStore } from 'redux';
import initialState from './initialState';
import { strContains } from '../utils/strContains';

export const getFilteredCards = ({ cards, searchPhrase }, columnId) =>
	cards.filter(
		card => card.columnId === columnId && strContains(card.title, searchPhrase)
	);

export const getAllColumns = ({ columns }) => {
	return columns;
};

export const getAllLists = ({ lists }) => {
	return lists;
};

export const getListById = ({ lists }, listId) => {
	return lists.find(list => list.id == listId);
};

export const getColumnsByList = ({ columns }, listId) => {
	return columns.filter(column => column.listId == listId);
};

export const getFavCards = ({ cards }) => {
	return cards.filter(card => card.isFavorite === true);
};

export const addList = payload => ({ type: 'ADD_LIST', payload });

export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });

export const addCart = payload => ({ type: 'ADD_CARD', payload });

export const searchCards = payload => ({ type: 'SET_PHRASE', payload });

export const addToFavorite = payload => ({
	type: 'TOGGLE_CARD_FAVORITE',
	payload,
});

// ======= SUBREDUCERS ===============

const listsReducer = (statePart = [], action) => {
	switch (action.type) {
		case 'ADD_LIST':
			return [...statePart, { ...action.payload }];
		default:
			return statePart;
	}
};

const columnsReducer = (statePart = [], action) => {
	switch (action.type) {
		case 'ADD_COLUMN':
			return [...statePart, { ...action.payload }];
		default:
			return statePart;
	}
};

const cardsReducer = (statePart = [], action) => {
	switch (action.type) {
		case 'ADD_CARD':
			return [...statePart, { ...action.payload }];
		case 'TOGGLE_CARD_FAVORITE':
			return statePart.map(card =>
				card.id === action.payload
					? { ...card, isFavorite: !card.isFavorite }
					: card
			);
		default:
			return statePart;
	}
};

const searchStringReducer = (statePart = '', action) => {
	switch (action.type) {
		case 'SET_PHRASE':
			return action.payload;
		default:
			return statePart;
	}
};

const reducer = (state, action) => {
	const newState = {
		lists: listsReducer(state.lists, action),
		columns: columnsReducer(state.columns, action),
		cards: cardsReducer(state.cards, action),
		searchPhrase: searchStringReducer(state.searchPhrase, action),
	};

	return newState;
};

const store = createStore(
	reducer,
	initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
