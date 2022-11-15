import { Menu } from '@mui/icons-material';
import React from 'react';
import Logo from './assets/logo.png';

export default function Topbar() {
  return (
   <header className="header openBtn">
    <Menu className='close'/>
    <img src={Logo} alt="" className="logo" />
    <nav className="topNav">
        <a href="#home" className="toplink active">Home</a>
        <a href="#about" className="toplink"> About</a>
        <a href="#skills" className="toplink">Skills</a>
        <a href="#services" className="toplink">Services</a>
        <a href="#projects" className="toplink">Projects</a>
        <a href="#contact" className="toplink">Contact</a>
    </nav>
    <div className="icon" >Kibet K.</div>
   </header>
  )
}
