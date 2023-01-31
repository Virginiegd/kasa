import appartList from '../datas/logements.json'
import { NavLink } from 'react-router-dom'

function Card() {
  return (
    <section>
      <div className='container'>
        <ul className='card__appart'>
          {appartList.map((appart) => (
            <NavLink to={`/appartment/${appart.id}` } className='card__appart1' key={appart.id}>
              <li>
                <img src={appart.cover} alt="logement" />
                <h2>{appart.title}</h2>
              </li>
            </NavLink>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Card