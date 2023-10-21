const SET_PHRASE = 'app/searchPhrase/SET_PHRASE';

export const searchCards = payload => ({ type: SET_PHRASE, payload });

const searchPhraseReducer = (statePart = '', action) => {
	switch (action.type) {
		case SET_PHRASE:
			return action.payload;
		default:
			return statePart;
	}
};

export default searchPhraseReducer;
