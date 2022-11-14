import React from 'react'

export default function AccordionItem() {
  return (
    <div className="accordion-item">
        <button id="accordion-button-1" aria-expanded="false"><span className="accordion-title">What is your default programming language?</span><span className="icon" aria-hidden="true"></span></button>
        <div className="accordion-content">
           <p>I use modern javascript ES6 to write my scripts</p>
        </div> 
    </div>
  )
}
