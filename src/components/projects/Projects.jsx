import React from "react";
import "./projects.css";
import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";
import img4 from "./images/img4.png";
import img5 from "./images/img5.png";
import img6 from "./images/img6.png";
import img7 from "./images/img7.png";
import img8 from "./images/img8.png";

const Projects = () => {
  return (
    <section id="projects">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container project__container">
        <article className="project__item">
          <div className="project__item-image">
            <img src={img1} alt="" />
          </div>
          <h3>Omnifood</h3>
          <p>A restaurant website</p>
          <div className="project__item-cta">
            <a
              href="https://github.com/MostafaHamdy3/omnifood"
              className="btn"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://omnifoodmostafa.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="project__item">
          <div className="project__item-image">
            <img src={img2} alt="" />
          </div>
          <h3>Forkify</h3>
          <p>A recipes website allows you to search +million recipe.</p>
          <div className="project__item-cta">
            <a
              href="https://github.com/MostafaHamdy3/forkify"
              className="btn"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://forkify-mostafa.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="project__item">
          <div className="project__item-image">
            <img src={img3} alt="" />
          </div>
          <h3>Pig Game</h3>
          <p>A simple dice game between two players.</p>
          <div className="project__item-cta">
            <a
              href="https://github.com/MostafaHamdy3/PigGame"
              className="btn"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://game-mostafa.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="project__item">
          <div className="project__item-image">
            <img src={img4} alt="" />
          </div>
          <h3>Bankist website</h3>
          <p>A simple bank website application with modern animation.</p>
          <div className="project__item-cta">
            <a
              href="https://github.com/MostafaHamdy3/Bankist-Webside"
              className="btn"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://bankist-webside-mostafa.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="project__item">
          <div className="project__item-image">
            <img src={img5} alt="" />
          </div>
          <h3>Bankist</h3>
          <p>A simple simulation for a bank website. fake login "mh" "1111"</p>
          <div className="project__item-cta">
            <a
              href="https://github.com/MostafaHamdy3/Bankist"
              className="btn"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://bankist-mostafa.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="project__item">
          <div className="project__item-image">
            <img src={img6} alt="" />
          </div>
          <h3>Mapty</h3>
          <p>
            A simple map Application that you can use to organize and track your
            workout, running and cycling.
          </p>
          <div className="project__item-cta">
            <a
              href="https://github.com/MostafaHamdy3/Map"
              className="btn"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://mapty-darsh.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="project__item">
          <div className="project__item-image">
            <img src={img7} alt="" />
          </div>
          <h3>Multiplayer Pong</h3>
          <p>A simple pong game between two players.</p>
          <div className="project__item-cta">
            <a
              href="https://github.com/MostafaHamdy3/Multiplayer-Pong"
              className="btn"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://mostafa-pong.herokuapp.com/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="project__item">
          <div className="project__item-image">
            <img src={img8} alt="" />
          </div>
          <h3>Scratch</h3>
          <p>A note app made with sst framework.</p>
          <div className="project__item-cta">
            <a
              href="https://github.com/MostafaHamdy3/my-sst"
              className="btn"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://d3kivtqqurvdmk.cloudfront.net/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Projects;
