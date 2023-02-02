import appartList from '../datas/logements.json'
import { NavLink } from 'react-router-dom'

function Card() {
  return (
    <section>
      <div className='container'>
        <ul className='card__appart'>
          {appartList.map((appart) => (
              <li className='card__appart1' key={appart.id}>
                <NavLink to={`/appartment/${appart.id}` }>
                <img src={appart.cover} alt="logement" />
                <h2>{appart.title}</h2>
                </NavLink>
              </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Card