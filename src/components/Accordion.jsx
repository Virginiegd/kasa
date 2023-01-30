import React, { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

const Accordion = ({ heading, content }) => {
  const [isActive, setIsActive] = useState(false)
  const element = <FontAwesomeIcon icon={faAngleDown} />

  return (

    <section>
      <ul className="container">
        <li className='accordion__contend'>
          <div className="accordion__heading" onClick={() => setIsActive(!isActive)}>
            <h2>{heading}</h2>
            <span>{isActive ? <button className="header__buttonOpen" >{element}</button> : <button className="heading__buttonClose">{element}</button>}</span>
          </div>
          {isActive && <div className="accordion__content">{content}</div>}
        </li>
      </ul>
    </section>
  )
}

export default Accordion