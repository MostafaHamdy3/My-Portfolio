import React from "react";
import "./footer.css";
import MH from "../../assets/logo-h1.png";
import { BsLinkedin } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        <img alt="" src={MH} />
      </a>

      <ul className="primalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/mostafa-hamdy-5b793b206/">
          <BsLinkedin />
        </a>
        {/* ADD Your facebook link here */}
        <a href="">
          <FaFacebookF />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Mostafa Hamdy</small>
      </div>
    </footer>
  );
};

export default Footer;
