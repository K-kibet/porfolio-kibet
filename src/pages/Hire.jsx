import React from 'react';
import Image from '../assets/desk.png';

export default function Hire() {
  return (
    <div className="hire">
    <img src={Image} alt="" />
    <div className="hire-span">
        <p>If you are looking for a suitable candidate to hire for front-end development then this is the right place for you. <br /></p>
        <button className="hireBtn">Hire Me</button>
    </div>
</div>
  )
}
