import styles from './CardForm.module.scss';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from '../../redux/store';

const CardForm = ({ columnId }) => {
	const cardsArrLength = useSelector(state => state.cards.length);
	const dispatch = useDispatch();
	const [title, setTitle] = useState('');

	const handleSubmit = e => {
		e.preventDefault();

		if (!title) return;

		let cardId = cardsArrLength + 1;

		dispatch(addCart({ id: cardId, columnId, title }));
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
