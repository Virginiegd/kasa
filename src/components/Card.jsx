import appartList from '../datas/logements.json'

function Card() {

    return(
      <div className='container'>
        <ul className='card'>
            {appartList.map((appart) => (
                <li className='appart' key={appart.id}>{appart.title}</li>
            ))}
        </ul>
      </div>
    
    )
}

export default Card