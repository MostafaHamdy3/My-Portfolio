import React from 'react'

import "./projects.css";

function ProjectCard(props) {
  return (
    <article className="project__item">
      <div className="project__item-image">
        <img src={props.img} alt="" loading="lazy" />
      </div>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <div className="project__item-cta">
        <a
          href={`https://github.com/${props.githubLink}`}
          className="btn"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        {props.demoLink && (
          <a
            href={props.demoLink}
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>
        )}
      </div>
    </article>
  )
}

export default ProjectCard