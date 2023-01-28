import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

const Accordion = ({ heading, content }) => {
  const [isActive, setIsActive] = useState(false);
  const element= <FontAwesomeIcon icon={ faAngleDown } />

  return (
    <section className="container">
        <ul>
    <li className='tiroir__contend'>
   
        <div className="header" onClick={() => setIsActive(!isActive)}>
        <h2>{heading}</h2>
        <span>{isActive ? <button>{element}</button> : <button>{element}</button>}</span>
        </div>
    
      {isActive && <div className="text">{content}</div>}
    </li>
    </ul>
    </section>
  );
};

export default Accordion;