/**
 * @prettier
 */
import styles from '../sass/main.module.sass';

export default function WhatIKnow() {
	return (
		<div className={styles.techStack} id="whatiknow">
			<div className={styles.whatIKnow}>
				Languages, Libraries, Frameworks and
				Tech
			</div>
			<section className={styles.techContainer}>
				<div>
					<div
						className={
							styles.techStack__tech__1
						}
					></div>
					<span>HTML</span>
				</div>

				<div>
					<div
						className={
							styles.techStack__tech__2
						}
					></div>
					<span>CSS</span>
				</div>

				<div>
					<div
						className={
							styles.techStack__tech__3
						}
					></div>
					<span>SASS</span>
				</div>

				<div>
					<div
						className={
							styles.techStack__tech__4
						}
					></div>
					<span>JAVASCRIPT</span>
				</div>

				<div>
					<div
						className={
							styles.techStack__tech__5
						}
					></div>
					<span>REACT</span>
				</div>

				<div>
					<div
						className={
							styles.techStack__tech__6
						}
					></div>
					<span>REDUX</span>
				</div>

				<div>
					<div
						className={
							styles.techStack__tech__7
						}
					></div>
					<span>NEXT</span>
				</div>

				<div>
					<div
						className={
							styles.techStack__tech__8
						}
					></div>
					<span>SQL</span>
				</div>

				<div>
					<div
						className={
							styles.techStack__tech__9
						}
					></div>
					<span>NODE</span>
				</div>

				<div>
					<div
						className={
							styles.techStack__tech__10
						}
					></div>
					<span>PYTHON</span>
				</div>

				<div>
					<div
						className={
							styles.techStack__tech__11
						}
					></div>
					<span>NPM</span>
				</div>

				<div>
					<div
						className={
							styles.techStack__tech__12
						}
					></div>
					<span>GITHUB</span>
				</div>
			</section>
		</div>
	);
}
