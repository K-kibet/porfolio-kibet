import React from 'react';
import Skill from './Skill';
import { skills } from './data';

const Skills = () => {
    return (
        <div className='skills' id='skills'>
            <h1>My Skills</h1>
            <div className="wrapper">
                {
                    skills.map(skill => {
                        return <Skill key={skill.id} skill={skill}/>
                    })
                }
            </div>
            <div className="other">
                <img src="" alt="" />
            </div>
        </div>
    );
}

export default Skills;
