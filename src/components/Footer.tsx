import { Logo } from "./Logo";
import "../css/Footer.css";

export function Footer() {
  return (
    <footer className="margin-top main-footer">
      <div className="main-footer-content container">
        <div>
          <Logo />
          <p className="copyright">Copyright © 2025. All rights reserved.</p>
        </div>
        <div className="contact-me">
          <h3>Contact me</h3>
          <ul> 
            <li><a href="mailto:artiomastashonak@gmail.com">Email</a></li>
            <li><a href="https://github.com/detectivekaktus">GitHub</a></li>
            <li><a href="https://linkedin.com/in/artiomastashonak">LinkedIn</a></li>
            <li><a href="https://t.me/artiomastashonak">Telegram</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
