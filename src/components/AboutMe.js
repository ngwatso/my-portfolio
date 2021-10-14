/**
 * @prettier
 */
import styles from '../sass/main.module.sass';
import Image from 'next/image';

export default function AboutMe() {
	return (
		<div className={styles.about} id="aboutMe">
			About Me
			<div className={styles.about__bioWrap}>
				<p>
					Hello, my name is Nick and I
					have been programming since
					August 2020. Although I have
					not been doing it for a long
					time, I have learned a lot
					since beginning my journey at
					Lambda School. Through group
					projects and team-oriented
					learning, I have been able to
					gather real-world experience
					as I have learned the Ins and
					Outs of front-end and back-end
					web development, as well as
					computer science. I am
					constantly driving myself to
					learn as much as I can, and
					pushing the boundaries of my
					current knowledge at every
					opportunity.
				</p>
			</div>
			<div className={styles.about__bio}></div>
		</div>
	);
}
