import React from 'react';
import Image from './assets/image.png';
import Resume from './assets/resume.pdf';

const About = () => {
    return (
        <div className='about' id='about'>
            <h1>About</h1>
            <div className="wrapper">
                <div className="image-container">
                    <img src={Image} alt="profile-image" />
                </div>
                <p>
                   Kibet Korir Charles is a fullstack developer who is goal oriented and responsible for implementing front-end and back-end development. I geared toward quality and productivity while being time consciouss. I outstanding communication skills both spoken and written.
                </p>
                <a href={Resume} title='contact' target='_blank'>RESUME</a>
            </div>
        </div>
    );
}

export default About;
