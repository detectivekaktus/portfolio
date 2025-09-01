import "../css/IconCard.css";

type IconCardProps = {
  tooltip?: string,
  children: React.ReactNode
}

export function IconCard({ tooltip, children }: IconCardProps) {
  return (
    <div className="icon-card">
      {children}
      {tooltip && <span className="icon-card-tooltip" role="tooltip" aria-hidden="true">{tooltip}</span>}
    </div>
  );
}
