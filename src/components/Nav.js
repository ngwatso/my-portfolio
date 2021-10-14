/**
 * @prettier
 */
import styles from '../sass/main.module.sass';
// import Link from 'next/link';

export default function Nav() {
	return (
		<div className={styles.nav}>
			<div className={styles.nav__icon}></div>
			<ul className={styles.nav__list}>
				<li
					className={styles.nav__link}
					href="#aboutMe"
				>
					<a href="#aboutMe">
						About Me
					</a>
				</li>
				<li
					className={styles.nav__link}
					href="#projects"
				>
					<a href="#projects">
						Projects
					</a>
				</li>
				<li
					className={styles.nav__link}
					href="#whatiknow"
				>
					<a href="#whatiknow">
						What I know
					</a>
				</li>
				<li
					className={styles.nav__link}
					href="#questions"
				>
					<a href="#questions">
						Questions?
					</a>
				</li>
			</ul>
		</div>
	);
}
