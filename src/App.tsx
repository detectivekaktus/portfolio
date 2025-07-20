import { Header } from "./components/Header";
import { IconCard } from "./components/IconCard";
import { Footer } from "./components/Footer";
import { ProjectCard } from "./components/ProjectCard";

export function App() {
  return (
    <>
      <Header />
      <main>
        <section className="margin-top container hero">
          <h1>Software developer exploring different areas of computer science</h1>
          <div className="hero-info">
            <ul className="tech-skills">
              <li><IconCard iconPath="/typescript-icon.png" altText="TypeScript" /></li>
              <li><IconCard iconPath="/python-icon.png" altText="Python" /></li>
              <li><IconCard iconPath="/golang-icon.png" altText="Golang" /></li>
              <li><IconCard iconPath="/react-icon.png" altText="React" /></li>
            </ul>
            <p>Bergamo, Italy</p>
          </div>
        </section>
        <section className="double-margin-top container projects">
          <ProjectCard
            name="JGame" 
            headline="Competitive quiz web app"
            description="Compete with other users in real time by playing custom quizzes"
            imgUrl="/jgame-showcase.png"
            url="https://github.com/detectivekaktus/JGame">
            <li><IconCard iconPath="/typescript-icon.png" altText="TypeScript"/></li>
            <li><IconCard iconPath="/react-icon.png" altText="React"/></li>
            <li><IconCard iconPath="/golang-icon.png" altText="Golang"/></li>
            <li><IconCard iconPath="/postgresql-icon.png" altText="PostgreSQL"/></li>
          </ProjectCard>
          <ProjectCard
            name="Bridgewatcher" 
            headline="Automation discord bot"
            description="Automate and simplify game tasks for Albion Online within a popular messaging app"
            imgUrl="/bridgewatcher-showcase.png"
            url="https://github.com/detectivekaktus/bridgewatcher">
            <li><IconCard iconPath="/python-icon.png" altText="Python"/></li>
          </ProjectCard>
        </section>
        <section className="container cta">
          <h1>Let's have a talk</h1>
          <div className="links-wrapper">
            <ul className="links">
              <li><a href="mailto:artiomastashonak@gmail.com" target="_blank"><IconCard iconPath="/gmail-icon.png" altText="Email" /></a></li>
              <li><a href="https://github.com/detectivekaktus" target="_blank"><IconCard iconPath="/github-icon.png" altText="GitHub"/></a></li>
              <li><a href="https://linkedin.com/in/artiomastashonak" target="_blank"><IconCard iconPath="/linkedin-icon.png" altText="LinkedIn" /></a></li>
              <li><a href="https://t.me/artiomastashonak" target="_blank"><IconCard iconPath="/telegram-icon.png" altText="Telegram" /></a></li>
              <li><a href="tel:+393516811815" target="_blank"><IconCard iconPath="/phone-icon.png" altText="Phone" /></a></li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
