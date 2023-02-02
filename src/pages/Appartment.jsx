import Header from '../components/Header'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom'
import appartList from '../datas/logements.json'
import Error404 from './Error'
import AppartSlider from '../components/AppartSlider'

function Appartment() {
  const { id } = useParams()
  const appart = appartList.find((appart) => appart.id === id)

  if (appart) {
    return (
      <div>
        <Header />
        <main>
          <AppartSlider appartId={appart}/>
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

// <h1>{props.appartId.title}</h1>
