import React from 'react'

export default function Skill({skill}) {
  return (
    <div className="skillItem">
        <div className="skillName">{skill.title}</div>
        <div className="bar">
            <div className={`background ${skill.class}`}>{skill.level}%</div>
        </div>
    </div>
  )
}
