import { Button } from "./Button";

type ProjectCardProps = {
  name: string,
  headline: string,
  description: string,
  imgUrl: string,
  url: string,
  children: React.ReactNode
}

export function ProjectCard({ name, headline, description, imgUrl, url, children }: ProjectCardProps) {
  return (
    <div className="project-card">
      <img src={imgUrl} />
      <div className="project-info">
        <div className="general-info">
          <h2>{name}</h2>
          <p>{headline}</p>
          <p>{description}</p>
        </div>
        <div className="techstack-info">
          <ul className="techstack-list">
            {children}
          </ul>
        </div>
        <a href={url}><Button>Check source code↗</Button></a>
      </div>
    </div>
  );
}
