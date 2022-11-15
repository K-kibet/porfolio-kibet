import React, { useEffect } from 'react';
import { KeyboardArrowDown } from '@mui/icons-material';
import Typed from 'typed.js';

export default function Home() {
  const handleScroll = () => {
    window.scrollTo({
        top: 350,
        left: 0,
        behavior: 'smooth'
    })
  }


  const type = () => {
    //auto-type
    var typed = new Typed(".type", {
      strings : ["Software Engineer.", "Front-end Engineer.", "API Developer.", "Android Developer."],
      typeSpeed: 100,
      backSpeed: 100, 
      loop: true 
    })
  }

  useEffect(() => {
    type();
  }, [])


  return (
    <div className='home' id='home'>
        <h1>Hi, <br />
            I am Kibet <br />
            <span className="type"></span>
        </h1>
        <div className='btn' onClick={handleScroll}>
            <KeyboardArrowDown />
        </div>
    </div>
  )
}
