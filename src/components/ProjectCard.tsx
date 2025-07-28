import { Button } from "./Button";
import "../css/ProjectCard.css";

type ProjectCardProps = {
  reverse?: boolean,
  className?: string,
  name: string,
  headline: string,
  description: string,
  imgUrl: string,
  url: string,
  children: React.ReactNode
}

export function ProjectCard({ reverse, className, name, headline, description, imgUrl, url, children }: ProjectCardProps) {
  return (
    <div className={`project-card ${className}`}>
      <div className="project-info">
        <div className="general-info">
          <h2>{name}</h2>
          <p className="project-headline">{headline}</p>
          <p className="project-description">{description}</p>
        </div>
        <div className="techstack-info">
          <ul className="techstack-list">
            {children}
          </ul>
        </div>
        <a href={url}><Button>Check source code↗</Button></a>
      </div>
      <img className={reverse ? "project-card-preview project-card-reversed" : "project-card-preview" } src={imgUrl} />
    </div>
  );
}
