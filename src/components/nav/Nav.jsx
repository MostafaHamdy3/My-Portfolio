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
      <a href="#" className={activeNav === "#" ? "active" : ""}>
        <AiOutlineHome />
      </a>
      <a href="#about" className={activeNav === "#about" ? "active" : ""}>
        <AiOutlineUser />
      </a>
      <a href="#experience" className={activeNav === "#experience" ? "active" : ""}>
        <BiBook />
      </a>
      <a href="#projects" className={activeNav === "#projects" ? "active" : ""}>
        <AiOutlineProject />
      </a>
      <a href="#contact" className={activeNav === "#contact" ? "active" : ""}>
        <BiMessageRoundedDetail />
      </a>
    </nav>
  );
};

export default Nav;
