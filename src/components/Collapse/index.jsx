import React, { useState } from "react";
import "./Collapse.css";
import vectordown from '../../assets/Vector_down.png'
import vectorup from '../../assets/Vector_up.png'

const Accordion = ({ heading, content}) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <li className="accordion-item" >
      <div className="accordion-toggle" onClick={() => setIsActive(!isActive)}>
        <h3>{heading}</h3><span>{isActive ? <img src={vectorup} alt="aa" /> : <img src={vectordown} alt="aa" /> }</span>
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
    </li>
  );
};

export default Accordion;

