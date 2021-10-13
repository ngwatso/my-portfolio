import styles from '../sass/main.module.sass';
import AboutMe from '../components/AboutMe';
import WhatIKnow from '../components/WhatIKnow';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import Questions from '../components/Questions';

function HomePage() {
  return (
  <div className={styles.mainApp}>
  <h1 className={styles.header}>Header</h1>
  <AboutMe />
  <WhatIKnow />
  <Projects />
  <Questions />
  <Footer />
</div>
  )
}

export default HomePage