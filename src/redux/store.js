/* eslint-disable eqeqeq */
import { createStore, combineReducers } from 'redux';
import initialState from './initialState';
import { strContains } from '../utils/strContains';
import listsReducer from './listsRedux';
import columnsReducer from './columnsRedux';
import cardsReducer from './cardsRedux';
import searchPhraseReducer from './searchPhraseRedux';

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

// ======= SUBREDUCERS ===============

const subreducers = {
	lists: listsReducer,
	columns: columnsReducer,
	cards: cardsReducer,
	searchPhrase: searchPhraseReducer,
};

const reducer = combineReducers(subreducers);

const store = createStore(
	reducer,
	initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
