import "./about.css";
import ME from "../../assets/me.webp";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { AiFillProject } from "react-icons/ai";

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h4>Experience</h4>
              <small>Mid-Level</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h4>Clients</h4>
              <small>5+</small>
            </article>

            <article className="about__card">
              <AiFillProject className="about__icon" />
              <h4>Projects</h4>
              <small>25+ Completed</small>
            </article>
          </div>

          <ul>
            <li>Bachelor's degree in Computer Engineering at Fayoum University.</li>
            <li>I'm working on KSA company.</li>
            <li>I have +2 years of experience building cross-platform mobile apps (Android/iOS).</li>
            <li>Specialized in performance optimization, API integration, and scalable UI development.</li>
            <li>Interested in clean code, scalability, and delivering seamless user experiences.</li>
            <li>I trained at Kalbonyan-Elmarsos.</li>
          </ul>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
