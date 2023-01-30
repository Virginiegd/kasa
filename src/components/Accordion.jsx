import React, { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

const Accordion = ({ heading, content }) => {
  const [isActive, setIsActive] = useState(false)
  const element = <FontAwesomeIcon icon={faAngleDown} />

  return (
    
    <section className="container">
      <ul>
        <li className='accordion__contend'>
          <div className="header" onClick={() => setIsActive(!isActive)}>
            <h2>{heading}</h2>
            <span>{isActive ? <button className="buttonOpen" >{element}</button> : <button className="buttonClose">{element}</button>}</span>
          </div>
          {isActive && <div className="text">{content}</div>}
        </li>
      </ul>
    </section>
  )
}

export default Accordion