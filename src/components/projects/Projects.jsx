import React from "react";
import "./projects.css";
import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";
import img4 from "./images/img4.png";
import img5 from "./images/img5.png";
import img6 from "./images/img6.png";
// import img7 from "./images/img7.png";
import img8 from "./images/img8.png";
import img9 from "./images/img9.png";
import img10 from "./images/img10.png";
import img11 from "./images/img11.png";
import img12 from "./images/img12.png";
import img13 from "./images/img13.jpg";

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
              href="https://github.com/MostafaHamdy3/Kalbonyan-Elmarsos/tree/main/02-Udemy/-01-HTML-CSS-Jonas/Projects/Omnifood"
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
              href="https://github.com/MostafaHamdy3/Kalbonyan-Elmarsos/tree/main/02-Udemy/-02-Js-Jonas/Projects/Forkify"
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
              href="https://github.com/MostafaHamdy3/Kalbonyan-Elmarsos/tree/main/02-Udemy/-02-Js-Jonas/Projects/Pig-Game"
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
              href="https://github.com/MostafaHamdy3/Kalbonyan-Elmarsos/tree/main/02-Udemy/-02-Js-Jonas/Projects/Bankist-Site"
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
              href="https://github.com/MostafaHamdy3/Kalbonyan-Elmarsos/tree/main/02-Udemy/-02-Js-Jonas/Projects/Bankist"
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
              href="https://github.com/MostafaHamdy3/Kalbonyan-Elmarsos/tree/main/02-Udemy/-02-Js-Jonas/Projects/Mapty"
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

        {/* <article className="project__item">
          <div className="project__item-image">
            <img src={img7} alt="" />
          </div>
          <h3>Multiplayer Pong</h3>
          <p>A simple pong game between two players.</p>
          <div className="project__item-cta">
            <a
              href="https://github.com/MostafaHamdy3/Kalbonyan-Elmarsos/tree/main/02-Udemy/-04-Nodejs-ZTM/Projects/Multiplayer-Pong"
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
        </article> */}
        <article className="project__item">
          <div className="project__item-image">
            <img src={img13} alt="" />
          </div>
          <h3>Hangman Game</h3>
          <p>
            A simple game you guess the letter if it exist in random word that
            will added in specific index, you've 4 attempts to guess the word.
          </p>
          <div className="project__item-cta">
            <a
              href="https://github.com/MostafaHamdy3/Hangman"
              className="btn"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://hangman-rouge-two.vercel.app/"
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
          <p>
            A note app that you can write your notes, made with sst framework.
          </p>
          <div className="project__item-cta">
            <a
              href="https://github.com/MostafaHamdy3/Kalbonyan-Elmarsos/tree/main/04-Serverless-Stack-Project/Serverless-project"
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

        <article className="project__item">
          <div className="project__item-image">
            <img src={img9} alt="" />
          </div>
          <h3>Order food app</h3>
          <p>
            A food app website that use database and you can add any food you
            want in your cart and send your order.
          </p>
          <div className="project__item-cta">
            <a
              href="https://github.com/MostafaHamdy3/Kalbonyan-Elmarsos/tree/main/02-Udemy/-03-Reactjs-Maximilian/Projects/order-food-app/S17-project"
              className="btn"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://order-food-app-mostafa.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="project__item">
          <div className="project__item-image">
            <img src={img10} alt="" />
          </div>
          <h3>Cart app</h3>
          <p>
            A website that use database to get all number of books you add to
            your cart.
          </p>
          <div className="project__item-cta">
            <a
              href="https://github.com/MostafaHamdy3/Kalbonyan-Elmarsos/tree/main/02-Udemy/-03-Reactjs-Maximilian/Projects/redux-cart"
              className="btn"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://redux-cart-mostafa.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="project__item">
          <div className="project__item-image">
            <img src={img11} alt="" />
          </div>
          <h3>Quote app</h3>
          <p>A website that use database to get all quotes.</p>
          <div className="project__item-cta">
            <a
              href="https://github.com/MostafaHamdy3/Kalbonyan-Elmarsos/tree/main/02-Udemy/-03-Reactjs-Maximilian/Projects/quotes-app"
              className="btn"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://quotes-app-mostafa.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="project__item">
          <div className="project__item-image">
            <img src={img12} alt="" />
          </div>
          <h3>Authentication Page</h3>
          <p>
            A website that use database to make authentication with data you
            write.
          </p>
          <div className="project__item-cta">
            <a
              href="https://github.com/MostafaHamdy3/Kalbonyan-Elmarsos/tree/main/02-Udemy/-03-Reactjs-Maximilian/Projects/Authentication-page"
              className="btn"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://authentication-page-mostafa.netlify.app"
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
