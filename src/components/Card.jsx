import appartList from '../datas/logements.json'

function Card() {

    return(
      <section>
        <div className='container'>
          <ul className='card-appart'>
              {appartList.map((appart) => (
                  <li className='card-appart1' key={appart.id}>
                    <img  src={appart.cover} alt="logement"/>
                    <h2>{appart.title}</h2></li>
              ))}
          </ul>
        </div>
      </section>
    )
}

export default Card