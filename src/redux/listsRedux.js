const listsReducer = (statePart = [], action) => {
	switch (action.type) {
		case 'ADD_LIST':
			return [...statePart, { ...action.payload }];
		default:
			return statePart;
	}
};

export default listsReducer;
