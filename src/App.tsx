import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ProjectCard } from "./components/ProjectCard";
import { Icons } from "./utils/icons";
import "./css/App.css"

export function App() {
  return (
    <>
      <Header />
      <main>
        <section id="hero" className="margin-top container hero">
          <div className="hero-inner-wrapper">
            <h1>Software developer exploring different areas of computer science</h1>
            <div className="hero-info">
              <ul className="tech-skills">
                <li>{Icons.TYPESCRIPT}</li>
                <li>{Icons.PYTHON}</li>
                <li>{Icons.GOLANG}</li>
                <li>{Icons.REACT}</li>
              </ul>
              <p>Bergamo, Italy</p>
            </div>
          </div>
        </section>
        <section id="projects" role="list" className="double-margin-top container projects">
          <ProjectCard role="listitem" reverse={true}
            name="JGame" 
            headline="Competitive quiz web app"
            description="Compete with other users in real time by playing custom quizzes"
            imgUrl="/jgame-showcase.png"
            url="https://github.com/detectivekaktus/JGame">
            <li>{Icons.TYPESCRIPT}</li>
            <li>{Icons.REACT}</li>
            <li>{Icons.GOLANG}</li>
            <li>{Icons.POSTGRESQL}</li>
          </ProjectCard>
          <ProjectCard role="listitem" className="margin-top" reverse={true}
            name="Bridgewatcher" 
            headline="Automation discord bot"
            description="Automate and simplify game tasks for Albion Online within a popular messaging app"
            imgUrl="/bridgewatcher-showcase.png"
            url="https://github.com/detectivekaktus/bridgewatcher">
            <li>{Icons.PYTHON}</li>
          </ProjectCard>
        </section>
        <section id="contact" className="double-margin-top container cta">
          <h1>Let's have a talk</h1>
          <ul itemScope itemType="https://schema.org/Person" className="cta-links">
            <li><a itemProp="email" href="mailto:artiomastashonak@gmail.com" aria-label="Send me an email">{Icons.EMAIL}</a></li>
            <li><a itemProp="sameAs" href="https://github.com/detectivekaktus" aria-label="See my GitHub repositories" target="_blank">{Icons.GITHUB}</a></li>
            <li><a itemProp="sameAs" href="https://linkedin.com/in/artiomastashonak" aria-label="Connect with me on LinkedIn" target="_blank">{Icons.LINKEDIN}</a></li>
            <li><a itemProp="sameAs" href="https://t.me/artiomastashonak" aria-label="Text me on Telegram" target="_blank">{Icons.TELEGRAM}</a></li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
