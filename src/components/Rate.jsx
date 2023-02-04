import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Rate = ({rating}) => {
    const element = <FontAwesomeIcon icon={faStar} />
    const stars= [1, 2, 3, 4, 5]
    return(
        <div className='star__container'>
            {stars.map((star) => 
            rating >= star ? (
                <span key={star.toString()} className="color" >{element}</span>
            ) : (
                <span key={star.toString()} className="grey">{element}</span>
            )
            )}
        </div>
        
    )
}

export default Rate