import { useEffect, useRef, useState } from "react";

import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

type SectionIds = "#home" | "#about" | "#experience" | "#projects" | "#contact";

type SectionsRef = {
  [Key in SectionIds]: HTMLDivElement | null;
};

export default function App() {
  const [activeNav, setActiveNav] = useState<SectionIds>("#home");

  const sections = useRef<SectionsRef>({
    "#home": null,
    "#about": null,
    "#experience": null,
    "#projects": null,
    "#contact": null,
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;

      for (const id of Object.keys(sections.current) as SectionIds[]) {
        const section = sections.current[id];
        if (
          section &&
          section.offsetTop <= scrollPos &&
          section.offsetTop + section.clientHeight > scrollPos
        ) {
          setActiveNav(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div ref={el => { sections.current["#home"] = el }}>
        <Header />
      </div>
      <Nav activeNav={activeNav} />
      <div ref={el => { sections.current["#about"] = el }}>
        <About />
      </div>
      <div ref={el => { sections.current["#experience"] = el }}>
        <Experience />
      </div>
      <div ref={el => { sections.current["#projects"] = el }}>
        <Projects />
      </div>
      <div ref={el => { sections.current["#contact"] = el }}>
        <Contact />
      </div>
    </div>
  );
}
