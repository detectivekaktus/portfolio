import { Logo } from "./Logo";
import "../css/Header.css";

export function Header() {
  return (
    <header className="container">
      <Logo />
      <nav className="header-nav">
        <ul className="header-nav-list">
          <a href="https://linkedin.com/in/artiomastashonak"><li>Linkedin↗</li></a>
          <a href="https://github.com/detectivekaktus"><li>GitHub↗</li></a>
          <a href="#"><li>Resume↗</li></a></ul>
      </nav>
    </header>
  );
}
