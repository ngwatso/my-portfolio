import styles from '../sass/main.module.sass';
import Image from 'next/image'

export default function Projects() {
	return (
		<div className={styles.projectsWrap}>
			<div className={styles.projects} id="projects">
				<div className={styles.projects__title}>
					Projects
				</div>
				<div
					className={
						styles.projects__container
					}
				>
					<div
						className={
							styles.projects__card
						}
					>
						<div
							className={`${styles.projects__card__side} ${styles.projects__card__side__front}`}
						>
							<div
								className={
									styles.projectImg1
								}
							></div>
							<div
								className={
									styles.projectName
								}
							>
								Water
								My
								Plants
							</div>
						</div>
						<div
							className={`${styles.projects__card__side} ${styles.projects__card__side__back}`}
						>
							BACK
						</div>
					</div>
					<div
						className={
							styles.projects__card
						}
					>
						<div
							className={`${styles.projects__card__side} ${styles.projects__card__side__front}`}
						>
							<div
								className={
									styles.projectImg2
								}
							></div>
							<div
								className={
									styles.projectName
								}
							>
								Anywhere
								Fitness
							</div>
						</div>
						<div
							className={`${styles.projects__card__side} ${styles.projects__card__side__back}`}
						>
							BACK
						</div>
					</div>
					<div
						className={
							styles.projects__card
						}
					>
						<div
							className={`${styles.projects__card__side} ${styles.projects__card__side__front}`}
						>
							<div
								className={
									styles.projectImg3
								}
							></div>
							<div
								className={
									styles.projectName
								}
							>
								Natours
							</div>
						</div>
						<div
							className={`${styles.projects__card__side} ${styles.projects__card__side__back}`}
						>
							BACK
						</div>
					</div>
					<div
						className={
							styles.projects__card
						}
					>
						<div
							className={`${styles.projects__card__side} ${styles.projects__card__side__front}`}
						>
							<div
								className={
									styles.projectImg4
								}
							></div>
							<div
								className={
									styles.projectName
								}
							>
								Next
								Blog
							</div>
						</div>
						<div
							className={`${styles.projects__card__side} ${styles.projects__card__side__back}`}
						>
							BACK
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
