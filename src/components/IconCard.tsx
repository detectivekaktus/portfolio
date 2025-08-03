import "../css/IconCard.css";

type IconCardProps = {
  iconPath: string,
  altText: string
  tooltip?: string,
}

export function IconCard({ iconPath, altText, tooltip }: IconCardProps) {
  return (
    <div className="icon-card">
      <img src={iconPath} alt={altText} loading="lazy"/>
      {tooltip && <span className="icon-card-tooltip" role="tooltip" aria-hidden="true">{tooltip}</span>}
    </div>
  );
}
