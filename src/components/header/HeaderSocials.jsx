import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/mostafa-7amdy/"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn Profile"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/MostafaHamdy3"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub Profile"
      >
        <BsGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
