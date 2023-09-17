import styles from './TextInput.module.scss';

const TextInput = props => {
	return (
		// <input
		// 	className={styles.input}
		// 	type="text"
		// 	placeholder={props.placeholder}></input>

		<input
			className={styles.input}
			value={props.value}
			onChange={props.onChange}
			placeholder={props.placeholder}
			type="text"
		/>
	);
};

export default TextInput;
