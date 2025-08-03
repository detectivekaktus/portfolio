import { Button } from "./Button";
import "../css/ProjectCard.css";

type ProjectCardProps = {
  role?: string,
  reverse?: boolean,
  className?: string,
  name: string,
  headline: string,
  description: string,
  imgUrl: string,
  url: string,
  children: React.ReactNode
}

export function ProjectCard({ role, reverse, className, name, headline, description, imgUrl, url, children }: ProjectCardProps) {
  return (
    <article itemScope itemType="https://schema.org/SoftwareApplication" role={role ? role : ""} className={`project-card ${className ? className : ""}`}>
      <div className="project-info">
        <div className="general-info">
          <h2 itemProp="name">{name}</h2>
          <p itemProp="alternativeHeadline" className="project-headline">{headline}</p>
          <p itemProp="description" className="project-description">{description}</p>
        </div>
        <div className="techstack-info">
          <ul className="techstack-list">
            {children}
          </ul>
        </div>
        <a itemProp="url" role="button" href={url}><Button>Check source code↗</Button></a>
      </div>
      <img itemProp="screenshot" className={`project-card-preview ${reverse ? "project-card-reversed" : ""}`} src={imgUrl} loading="lazy"/>
    </article>
  );
}
