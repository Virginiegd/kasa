import Rate from "../components/Rate"
import Accordion from "../components/Accordion"

function AppartInformation(props) {

    return (
        <section>
            <div className="container">
                <div className="appart__container">
                    <div className="appart__info">
                        <h1>{props.appartId.title}</h1>
                        <div className="appart__owner">
                            <p>{props.appartId.host.name}</p>
                            <img src={props.appartId.host.picture} alt="" />
                        </div>
                    </div>
                    <p>{props.appartId.location}</p>
                    <div className='appart__bonus'>
                        <ul className="appart__tag">
                            {props.appartId.tags.map((word) => (
                                <li key={word}>
                                    {word}
                                </li>
                            ))}
                        </ul>
                        <div>
                            <Rate rating={props.appartId.rating} />
                        </div>
                    </div>
                    <div className="appart__description">
                    <ul>
                        <Accordion heading="Description" content={props.appartId.description} />
                    </ul>
                    <ul>
                        <Accordion heading="Equipements" content={props.appartId.equipments.map((description) => (
                            <p key={description}>
                                {description}
                            </p>
                        ))} />
                    </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AppartInformation