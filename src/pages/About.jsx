import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutBanner from '../components/AboutBanner';
import Tiroir from '../components/Tiroir'

function About() {
  return (
    <div>
      <Header />
      <main>
        <AboutBanner />
        <Tiroir />
      </main>
      <Footer />
    </div>
  );
}

export default About