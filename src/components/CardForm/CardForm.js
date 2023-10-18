import styles from './CardForm.module.scss';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from '../../redux/store';

const CardForm = ({ columnId, columnTitle }) => {
	const cardsArrLength = useSelector(state => state.cards.length);
	const dispatch = useDispatch();
	const [title, setTitle] = useState('');

	const handleSubmit = e => {
		e.preventDefault();

		if (!title) return;

		let cardId = cardsArrLength + 1;

		dispatch(addCart({ id: cardId, columnId, title }));
		// dispatch({ type: 'ADD_CARD', payload: { id: cardId, columnId, title } });
		setTitle('');
	};

	const setCartTitle = e => {
		setTitle(e.target.value);
	};

	return (
		<form className={styles.cardForm} onSubmit={handleSubmit}>
			<TextInput
				value={title}
				onChange={setCartTitle}
				placeholder={`Add new ` + columnTitle.toLowerCase()}
			/>
			<Button>Add cart</Button>
		</form>
	);
};

export default CardForm;
