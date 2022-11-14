import React from 'react';
import { KeyboardArrowDown } from '@mui/icons-material';

export default function Home() {
  const handleScroll = () => {
    window.scrollTo({
        top: 350,
        left: 0,
        behavior: 'smooth'
    })
  }
  return (
    <div className='home' id='home'>
        
        <h1>Hi, <br />
            I am Kibet <br />
            <span className="type"></span>
        </h1>
        <h2>Explore projects</h2>
        <div className='btn' onClick={handleScroll}>
            <KeyboardArrowDown />
        </div>
    </div>
  )
}
