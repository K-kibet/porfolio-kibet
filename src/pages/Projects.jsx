import React from 'react';
import Project from '../components/Project';
import { projects } from '../data';

const Projects = () => {
    return (
        <div className='projects' id='projects'>
            <h1>MY PROJECTS</h1>
            <div className="wrapper">
                {
                    projects.map(project => {
                        return <Project key={project.id} project={project}/>
                    })
                }
            </div>
        </div>
    );
}

export default Projects;
