import React, { useState } from "react";

import "./projects.css";
import img1 from "../../assets/images/img1.webp";
import img2 from "../../assets/images/img2.webp";
import img3 from "../../assets/images/img3.webp";
import img4 from "../../assets/images/img4.webp";
import img5 from "../../assets/images/img5.webp";
import img6 from "../../assets/images/img6.webp";
import img7 from "../../assets/images/img7.webp";
import img8 from "../../assets/images/img8.webp";
import img9 from "../../assets/images/img9.webp";
import img10 from "../../assets/images/img10.webp";
import img11 from "../../assets/images/img11.webp";
import img12 from "../../assets/images/img12.webp";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    img: img1,
    name: "Omnifood",
    description: "A restaurant website",
    githubLink:
      "Kalbonyan-Elmarsos/tree/main/02-Udemy/-01-HTML-CSS-Jonas/Projects/Omnifood",
    demoLink: "https://omnifoodmostafa.netlify.app/",
    category: "HTML&CSS",
  },
  {
    img: img2,
    name: "Forkify",
    description: "A recipes website allows you to search +million recipe.",
    githubLink:
      "Kalbonyan-Elmarsos/tree/main/02-Udemy/-02-Js-Jonas/Projects/Forkify",
    demoLink: "https://forkify-mostafa.netlify.app/",
    category: "JS",
  },
  {
    img: img3,
    name: "Pig Game",
    description: "A simple dice game between two players.",
    githubLink:
      "Kalbonyan-Elmarsos/tree/main/02-Udemy/-02-Js-Jonas/Projects/Pig-Game",
    demoLink: "https://game-mostafa.netlify.app/",
    category: "ReactJS",
  },
  {
    img: img4,
    name: "Bankist website",
    description: "A simple bank website application with modern animation.",
    githubLink:
      "Kalbonyan-Elmarsos/tree/main/02-Udemy/-02-Js-Jonas/Projects/Bankist-Site",
    demoLink: "https://bankist-webside-mostafa.netlify.app/",
    category: "ReactJS",
  },
  {
    img: img5,
    name: "Bankist",
    description:
      "A simple simulation for a bank website. fake login 'mh' '1111'",
    githubLink:
      "Kalbonyan-Elmarsos/tree/main/02-Udemy/-02-Js-Jonas/Projects/Bankist",
    demoLink: "https://bankist-mostafa.netlify.app/",
    category: "ReactJS",
  },
  {
    img: img6,
    name: "Mapty",
    description:
      "A simple map Application that you can use to organize and track your workout, running and cycling.",
    githubLink:
      "Kalbonyan-Elmarsos/tree/main/02-Udemy/-02-Js-Jonas/Projects/Mapty",
    demoLink: "https://mapty-darsh.netlify.app/",
    category: "ReactJS",
  },
  {
    img: img12,
    name: "Hangman Game",
    description:
      "A simple game you guess the letter if it exist in random word that will added in specific index, you've 4 attempts to guess the word.",
    githubLink: "Hangman",
    demoLink: "https://hangman-rouge-two.vercel.app/",
    category: "HTML&CSS",
  },
  {
    img: img7,
    name: "Scratch",
    description:
      "A note app that you can write your notes, made with sst framework.",
    githubLink:
      "Kalbonyan-Elmarsos/tree/main/04-Serverless-Stack-Project/Serverless-project",
    demoLink: "https://d3kivtqqurvdmk.cloudfront.net/",
    category: "Full Stack",
  },
  {
    img: img8,
    name: "Order food app",
    description:
      "A food app website that use database and you can add any food you want in your cart and send your order.",
    githubLink:
      "Kalbonyan-Elmarsos/tree/main/02-Udemy/-03-Reactjs-Maximilian/Projects/order-food-app/S17-project",
    demoLink: "https://order-food-app-mostafa.netlify.app/",
    category: "ReactJS",
  },
  {
    img: img9,
    name: "Cart app",
    description:
      "A website that use database to get all number of books you add to your cart.",
    githubLink:
      "Kalbonyan-Elmarsos/tree/main/02-Udemy/-03-Reactjs-Maximilian/Projects/redux-cart",
    demoLink: "https://redux-cart-mostafa.netlify.app/",
    category: "ReactJS",
  },
  {
    img: img10,
    name: "Quote app",
    description: "A website that use database to get all quotes.",
    githubLink:
      "Kalbonyan-Elmarsos/tree/main/02-Udemy/-03-Reactjs-Maximilian/Projects/quotes-app",
    demoLink: "https://quotes-app-mostafa.netlify.app/",
    category: "ReactJS",
  },
  {
    img: img11,
    name: "Authentication Page",
    description:
      "A website that use database to make authentication with data you write.",
    githubLink:
      "Kalbonyan-Elmarsos/tree/main/02-Udemy/-03-Reactjs-Maximilian/Projects/Authentication-page",
    demoLink: "https://authentication-page-mostafa.netlify.app",
    category: "ReactJS",
  },
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = projects.filter(
    (project) =>
      selectedCategory === "All" || project.category === selectedCategory
  );

  return (
    <section id="projects">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      {/* Category Filter */}
      <div className="category-filter">
        {["All", "HTML&CSS", "JS", "ReactJS", "React Native", "Full Stack"].map(
          (category) => (
            <button
              key={category}
              className={selectedCategory === category ? "active" : ""}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          )
        )}
      </div>

      <div className="container project__container">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={index}
            img={project.img}
            name={project.name}
            description={project.description}
            githubLink={project.githubLink}
            demoLink={project.demoLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
