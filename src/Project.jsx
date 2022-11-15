import React from 'react'

export default function Project({project}) {
  return (
    <div className="item">
        <h1>{project.title}</h1>
        <img src={project.img} alt="Gaming website" />
        <a href={project.link} target="_blank">Visit Coongames</a>
    </div>
  )
} 
