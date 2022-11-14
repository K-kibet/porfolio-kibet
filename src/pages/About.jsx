import React from 'react';
import Image from '../assets/image.png';

const About = () => {
    return (
        <div className='about' id='about'>
            <h1>About</h1>
            <div className="wrapper">
                <div className="image-container">
                    <img src={Image} alt="profile-image" />
                </div>
                <p>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, aliquam, doloribus ea labore odio velit rerum illo cumque nesciunt amet assumenda qui exercitationem quo culpa fugiat iste repellat eos! Vero!
                </p>
                <a href="#contact" title='contact'>RESUME</a>
            </div>
        </div>
    );
}

export default About;
