import styles from '../sass/main.module.sass';
import Header from '../components/Header'
import AboutMe from '../components/AboutMe';
import WhatIKnow from '../components/WhatIKnow';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import Questions from '../components/Questions';

function HomePage() {
  return (
  <div className={styles.mainApp}>
  <Header />
  <AboutMe />
  <WhatIKnow />
  <Projects />
  <Questions />
  <Footer />
</div>
  )
}

export default HomePage