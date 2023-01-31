import { useParams } from 'react-router-dom'
import appartList from '../datas/logements.json'

function OneAppart() {
    const { id } = useParams()
    const appart = appartList.find((appart) => appart.id === id);

    return (
        <section>
            <div className='container'>
                <h1>{appart.title}</h1>
                <p>{appart.description}</p>
                <p>{appart.equipments}</p>
            </div>
        </section> 

        )
    
}

export default OneAppart