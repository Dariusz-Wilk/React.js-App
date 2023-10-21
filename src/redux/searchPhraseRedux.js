const searchPhraseReducer = (statePart = '', action) => {
	switch (action.type) {
		case 'SET_PHRASE':
			return action.payload;
		default:
			return statePart;
	}
};

export default searchPhraseReducer;
