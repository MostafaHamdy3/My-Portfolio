import React from 'react'

import "./projects.css";

function ProjectCard(props) {
  return (
    <article className="project__item">
      <div className="project__item-image">
        <img src={props.img} alt="" />
      </div>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <div className="project__item-cta">
        <a
          href={`https://github.com/MostafaHamdy3/${props.githubLink}`}
          className="btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href={props.demoLink}
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Demo
        </a>
      </div>
    </article>
  )
}

export default ProjectCard