import styles from './Navigation.module.scss';
import Container from '../Container/Container';

const Navigation = props => {
	return (
		<nav className={styles.nav}>
			<Container>
				<div className={styles.navItems}>
					<a href="/">
						<span className={styles.icon + ' fa fa-tasks'}></span>
					</a>
					<div>
						<a href="/" className={styles.navLink}>
							Home
						</a>
						<a href="/favorite" className={styles.navLink}>
							Favorite
						</a>
						<a href="/about" className={styles.navLink}>
							About
						</a>
					</div>
				</div>
			</Container>
		</nav>
	);
};

export default Navigation;
