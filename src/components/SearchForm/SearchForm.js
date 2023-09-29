import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchCards } from '../../redux/store';

const SearchForm = () => {
	const [phrase, setPhrase] = useState('');
	const dispatch = useDispatch();

	const clickHandler = e => {
		e.preventDefault();
		dispatch(searchCards(phrase));
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
