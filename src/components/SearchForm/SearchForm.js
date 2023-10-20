import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { searchCards } from '../../redux/store';

const SearchForm = () => {
	const [phrase, setPhrase] = useState('');
	const dispatch = useDispatch();

	const clickHandler = e => {
		e.preventDefault();
		dispatch(searchCards(phrase));
	};

	useEffect(() => {
		dispatch(searchCards(phrase));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<form className={styles.searchForm}>
			<TextInput
				placeholder="Search..."
				onChange={e => setPhrase(e.target.value)}
				value={phrase}
			/>
			<Button type="submit" onClick={clickHandler}>
				<span className="fa fa-search" />
			</Button>
		</form>
	);
};

export default SearchForm;
