const ADD_CARD = 'app/cards/ADD_CARD';
const TOGGLE_CARD_FAVORITE = 'app/cards/TOGGLE_CARD_FAVORITE';

export const addCart = payload => ({ type: ADD_CARD, payload });

export const addToFavorite = payload => ({
	type: TOGGLE_CARD_FAVORITE,
	payload,
});

const cardsReducer = (statePart = [], action) => {
	switch (action.type) {
		case ADD_CARD:
			return [...statePart, { ...action.payload }];
		case TOGGLE_CARD_FAVORITE:
			return statePart.map(card =>
				card.id === action.payload
					? { ...card, isFavorite: !card.isFavorite }
					: card
			);
		default:
			return statePart;
	}
};

export default cardsReducer;
