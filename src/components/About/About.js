import styles from './About.module.scss';
import PageTitle from '../PageTitle/PageTitle';

const About = () => {
	return (
		<main>
			<PageTitle>About</PageTitle>
			<p className={styles.text}>A few interesting facts about us</p>
		</main>
	);
};

export default About;
