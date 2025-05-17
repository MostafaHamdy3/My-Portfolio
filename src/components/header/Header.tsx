import { lazy } from "react";

import "./header.css";
import ME from "../../assets/me1.webp";

const HeaderSocials = lazy(() => import('./HeaderSocials'));
const CTA = lazy(() => import('./CTA'));

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h2>Mostafa Hamdy Hassan</h2>
        <h3 className="text-light">React Native | React Developer</h3>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img
            src={ME}
            alt="me"
            width="550"
            height="550"
            loading="eager"
            decoding="async"
            style={{contentVisibility: "auto"}}
          />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
