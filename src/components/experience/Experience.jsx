import React from "react";

import "./experience.css";
import ExperienceType from "./ExperienceType";

const experiences = [
  "TypeScript",
  "React Native",
  "EXPO",
  "JavaScript",
  "ReactJs",
  "CSS",
  "HTML",
  "Redux",
  "RESTful APIs",
  "OOP",
  "Problem Solving",
];

const expTools = [
  "Jira",
  "Figma",
  "Git/GitHub",
]

const Experience = () => {
  return (
    <section id="experience">
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div>
          <h3>Languages & Technologies</h3>
          <div className="experience__content">
            {experiences.map((exp, index) => (
              <ExperienceType key={index} ExpName={exp} />
            ))}
          </div>
        </div>
        <div>
          <h3>Tools</h3>
          <div className="experience__content">
            {expTools.map((exp, index) => (
              <ExperienceType key={index} ExpName={exp} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
