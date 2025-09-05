import "../css/NavList.css";

export type NavListProps = {
  links: { title: string, url: string }[],
};

export function NavList({ links }: NavListProps) {
  return (
  <nav className="nav-list">
    <ul>
      { links.map((l, key) => <li key={key}><a href={l.url}>{`${l.title}↗`}</a></li>) }
    </ul>
  </nav>);
}