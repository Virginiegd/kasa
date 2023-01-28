import listAbout from '../datas/about.json'
import Accordion from './Accordion'

function Tiroir() {
    return (
         <ul>
      {listAbout.map(({ id, heading, content }) => (
        <Accordion key={id} heading= {heading} content={content} />
      ))}
    </ul>
    )
}

export default Tiroir

/*
function Tiroir() {
    const element= <FontAwesomeIcon icon={ faAngleDown } />
    const [isOpen, setIsOpen] = useState(false)

    return isOpen ? ( 
        <section className="container">
            <ul>
            {listAbout.map((list) => (
                <li className='tiroir__contend' key={list.id}>
                    <div className="header">
                        <h2>{list.title}</h2>
                        <button onClick={() => setIsOpen(false)}>{element}</button>
                    </div>
                    <div className="text">
                        <p>{list.description}</p>
                    </div>
                </li>
            ))}
            </ul>
        </section> 
    ) : (
        <section className="container">
            <ul>
            {listAbout.map((list) => (
                <li className='tiroir__contend'key={list.id}>
                    <div className="header">
                        <h2>{list.title}</h2>
                        <button onClick={() => setIsOpen(true)}>{element}</button>
                    </div>
                    <div className="text-off">
                        <p>{list.description}</p>
                    </div>
                </li>
            ))}
            </ul>
            </section>
        
    )
}

export default Tiroir*/