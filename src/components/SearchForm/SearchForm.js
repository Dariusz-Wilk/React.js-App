import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const SearchForm = () => {
	const [phrase, setPhrase] = useState('');
	const dispatch = useDispatch();

	const clickHandler = e => {
		e.preventDefault();
		dispatch({
			type: 'SET_PHRASE',
			payload: phrase.toLocaleLowerCase(),
		});
	};

	return (
		<form className={styles.searchForm}>
			<TextInput
				placeholder="Search..."
				onChange={e => setPhrase(e.target.value)}
			/>
			<Button type="submit" onClick={clickHandler}>
				<span className="fa fa-search" />
			</Button>
		</form>
	);
};

export default SearchForm;
