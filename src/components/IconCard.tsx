import "../css/IconCard.css";

type IconCardProps = {
  title?: string,
  iconPath: string,
  altText: string
}

export function IconCard({ title, iconPath, altText }: IconCardProps) {
  return (
    <div className="icon-card" title={title}>
      <img src={iconPath} alt={altText} />
    </div>
  );
}
