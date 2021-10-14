/**
 * @prettier
 */
import styles from '../sass/main.module.sass';
import Nav from './Nav';

export default function Header() {
	return (
		<div className={styles.headerWrap}>
			<div className={styles.header}>
				<Nav />
				<div className={styles.header__imgWrap}>
					<div
						className={
							styles.header__heroImg
						}
					></div>
					<div className={styles.name}>
						Nick Watson
					</div>
				</div>
			</div>
		</div>
	);
}
