import styles from './Navigation.module.scss';
import Container from '../Container/Container';

import { NavLink } from 'react-router-dom';

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
							<NavLink
								to="/"
								className={({ isActive }) =>
									isActive ? styles.activeLink : undefined
								}>
								Home
							</NavLink>
						</li>
						<li className={styles.navLink}>
							<NavLink
								to="/favorite"
								className={({ isActive }) =>
									isActive ? styles.activeLink : undefined
								}>
								Favorite
							</NavLink>
						</li>
						<li className={styles.navLink}>
							<NavLink
								to="/about"
								className={({ isActive }) =>
									isActive ? styles.activeLink : undefined
								}>
								About
							</NavLink>
						</li>
					</ul>
				</div>
			</Container>
		</nav>
	);
};

export default Navigation;
