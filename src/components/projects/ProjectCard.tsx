import "./projects.css";

interface ProjectCardProps {
  img: string;
  name: string;
  description: string;
  githubLink: string;
  demoLink?: string;
}

function ProjectCard({img, name, description, githubLink, demoLink}: ProjectCardProps) {
  return (
    <article className="project__item">
      <div className="project__item-image">
        <img src={img} alt="" loading="lazy" />
      </div>
      <h3>{name}</h3>
      <p>{description}</p>
      <div className="project__item-cta">
        <a
          href={`https://github.com/${githubLink}`}
          className="btn"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        {demoLink && (
          <a
            href={demoLink}
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