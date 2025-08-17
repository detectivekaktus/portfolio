import { Logo } from "./Logo";
import "../css/Header.css";
import { useEffect, useState } from "react";

export function Header() {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.matchMedia("(max-width: 50em)").matches;
      if (expanded && isMobile)
        document.body.style.overflow = "hidden";
      else
        document.body.style.overflow = "";
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = "";
    };
  }, [expanded]);

  return (
    <header className="primary-header container">
      <Logo />
      <button className="header-nav-toggle" aria-controls="header-nav" aria-expanded={expanded} onClick={() => setExpanded(!expanded)}>
        <img className="hamburger" src="/hamburger.png" alt="" aria-hidden="true" />
        <span className="sr-only">Menu</span>
      </button>
      <nav id="header-nav" className={`header-nav ${expanded ? "header-nav-expanded" : ""}`}>
        <ul className="header-nav-list">
          <li><a target="_blank" href="https://linkedin.com/in/artiomastashonak">Linkedin↗</a></li>
          <li><a target="_blank" href="https://github.com/detectivekaktus">GitHub↗</a></li>
          <li><a target="_blank" href="https://drive.google.com/file/d/1eEJFAbOA_Yhy4mVkOPvefueQmOpTHrFf/view?usp=sharing">Resume↗</a></li>
        </ul>
      </nav>
    </header>
  );
}
