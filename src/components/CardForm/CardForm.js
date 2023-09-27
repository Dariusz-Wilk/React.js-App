import styles from './CardForm.module.scss';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const CardForm = props => {
	let cardsArrLength = useSelector(state => state.cards.length);
	const dispatch = useDispatch();
	const [title, setTitle] = useState('');

	const handleSubmit = e => {
		e.preventDefault();

		cardsArrLength += 1;
		const columnId = props.columnId;

		dispatch({
			type: 'ADD_CARD',
			payload: { id: cardsArrLength, columnId, title },
		});
		setTitle('');
	};

	return (
		<form className={styles.cardForm} onSubmit={handleSubmit}>
			<TextInput value={title} onChange={e => setTitle(e.target.value)} />
			<Button>Add cart</Button>
		</form>
	);
};

export default CardForm;
