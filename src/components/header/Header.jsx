import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me1.webp";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h2>Mostafa Hamdy Hassan</h2>
        <h3 className="text-light">React Native Developer</h3>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
