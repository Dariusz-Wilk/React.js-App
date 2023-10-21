import styles from '../ColumnForm/ColumnForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addList } from '../../redux/listsRedux';

const ListForm = () => {
	const dispatch = useDispatch();
	let listsLength = useSelector(state => state.lists.length);

	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');

	const handleSubmit = e => {
		e.preventDefault();

		if (!title) return;
		const listId = listsLength + 1;
		dispatch(addList({ id: listId, title, description }));

		setTitle('');
		setDescription('');
	};

	return (
		<form className={styles.columnForm} onSubmit={handleSubmit}>
			<div className="input-group">
				<label>Title: </label>
				<TextInput
					className={styles.input}
					type="text"
					value={title}
					onChange={e => setTitle(e.target.value)}
				/>
			</div>
			<div className="input-group">
				<label>Description: </label>
				<TextInput
					type="text"
					value={description}
					onChange={e => setDescription(e.target.value)}
				/>
			</div>

			<Button>Add list</Button>
		</form>
	);
};

export default ListForm;
