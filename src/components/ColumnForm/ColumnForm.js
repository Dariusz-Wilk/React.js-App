import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { addColumn } from '../../redux/columnsRedux';

const ColumnForm = ({ listId }) => {
	const dispatch = useDispatch();
	let columnsLength = useSelector(state => state.columns.length);
	const [title, setTitle] = useState('');
	const [icon, setIcon] = useState('');

	const handleSubmit = e => {
		e.preventDefault();

		if (!title) return;
		const columnId = columnsLength + 1;
		dispatch(addColumn({ listId, id: columnId, title, icon }));

		setTitle('');
		setIcon('');
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
				<label>Icon: </label>
				<TextInput
					type="text"
					value={icon}
					onChange={e => setIcon(e.target.value)}
				/>
			</div>

			<Button>Add column</Button>
		</form>
	);
};

export default ColumnForm;
