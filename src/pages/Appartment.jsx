import Header from '../components/Header'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom'
import appartList from '../datas/logements.json'
import Error404 from './Error'
import OneAppart from '../components/OneAppart'

function Appartment() {
  const { id } = useParams()
  const appart = appartList.find((appart) => appart.id === id)

  if (appart) {
    return (
      <div>
        <Header />
        <main>
          <OneAppart appartId={appart}/>
        </main>
        <Footer />
      </div>
    )

  } else {
    return (
      <div>
        <Error404 />
      </div>
    )
  }
}

export default Appartment


/*<section>
            <div className='container'>
              <h1>{appart.title}</h1>
              <p>{appart.description}</p>
              <p>{appart.equipments}</p>
            </div>
          </section> */
