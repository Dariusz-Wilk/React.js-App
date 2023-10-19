import styles from './Navigation.module.scss';
import Container from '../Container/Container';

import { Link } from 'react-router-dom';

const Navigation = () => {
	return (
		<nav className={styles.nav}>
			<Container>
				<div className={styles.navItems}>
					<a href="/">
						<span className={styles.icon + ' fa fa-tasks'}></span>
					</a>
					<ul className={styles.linksBox}>
						<li className={styles.navLink}>
							<Link to="/">Home</Link>
						</li>
						<li className={styles.navLink}>
							<Link to="/favorite">Favorite</Link>
						</li>
						<li className={styles.navLink}>
							<Link to="/about">About</Link>
						</li>
					</ul>
				</div>
			</Container>
		</nav>
	);
};

export default Navigation;
