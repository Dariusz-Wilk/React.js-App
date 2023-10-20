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

const reducer = (state, action) => {
	switch (action.type) {
		case 'ADD_COLUMN':
			return { ...state, columns: [...state.columns, action.payload] };
		case 'ADD_CARD':
			return { ...state, cards: [...state.cards, action.payload] };
		case 'SET_PHRASE':
			return { ...state, searchPhrase: action.payload };
		case 'ADD_LIST':
			return { ...state, lists: [...state.lists, action.payload] };
		case 'TOGGLE_CARD_FAVORITE':
			return {
				...state,
				cards: state.cards.map(card =>
					card.id === action.payload
						? { ...card, isFavorite: !card.isFavorite }
						: card
				),
			};
		default:
			return state;
	}
};

const store = createStore(
	reducer,
	initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
