import "../css/IconCard.css";

type IconCardProps = {
  iconPath: string,
  altText: string
}

export function IconCard({ iconPath, altText }: IconCardProps) {
  return (
    <div className="icon-card">
      <img src={iconPath} alt={altText} />
    </div>
  );
}
