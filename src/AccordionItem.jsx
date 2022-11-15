import { ExpandLess, ExpandMore } from '@mui/icons-material'
import React, { useState } from 'react'

export default function AccordionItem({faq}) {
  const [checked, setChecked] = useState('');
  return (
    <li>
      <div className="title">
        <input type="radio" name="accordion" onChange={(e) => {
          setChecked(e.target)
        }}/>
        <label>{faq.quiz}</label>
        {
          checked ? <ExpandLess /> : <ExpandMore />
        }
      </div>
      <div className="content" style={{
        maxHeight: checked ? '400px' :   '0px'
      }}>
        <p>
          {faq.ans}
        </p>
      </div>
    </li>
  )
}
