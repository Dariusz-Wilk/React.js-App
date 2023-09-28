import styles from './Button.module.scss';

const Button = ({ type, onClick, children }) => {
	return (
		<button className={styles.button} type={type} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
