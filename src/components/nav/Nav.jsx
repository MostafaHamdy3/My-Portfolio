import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { AiOutlineProject } from "react-icons/ai";
import { BiMessageRoundedDetail } from "react-icons/bi";
import "./nav.css";

const Nav = ({ activeNav }) => {
  return (
    <nav>
      <a
        href="#home"
        className={activeNav === "#home" ? "active" : ""}
        aria-label="Home icon"
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        className={activeNav === "#about" ? "active" : ""}
        aria-label="About icon"
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        className={activeNav === "#experience" ? "active" : ""}
        aria-label="Experience icon"
      >
        <BiBook />
      </a>
      <a
        href="#projects"
        className={activeNav === "#projects" ? "active" : ""}
        aria-label="Projects icon"
      >
        <AiOutlineProject />
      </a>
      <a
        href="#contact"
        className={activeNav === "#contact" ? "active" : ""}
        aria-label="Contact icon"
      >
        <BiMessageRoundedDetail />
      </a>
    </nav>
  );
};

export default Nav;
