import Header from '../components/Header'
import Footer from '../components/Footer'
import HomeBanner from '../components/HomeBanner'
import Card from '../components/Card'

function Home() {
  return (
    <div>
      <Header />
      <main>
        <HomeBanner />
        <Card />
      </main>
      <Footer />
    </div>
  );
}

export default Home
