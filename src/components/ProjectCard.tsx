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
    <div role={role ? role : ""} className={`project-card ${className}`}>
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
        <a role="button" href={url}><Button>Check source code↗</Button></a>
      </div>
      <img className={reverse ? "project-card-preview project-card-reversed" : "project-card-preview" } src={imgUrl} />
    </div>
  );
}
