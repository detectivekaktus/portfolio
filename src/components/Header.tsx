import { Logo } from "./Logo";
import "../css/Header.css";
import { BiMenu, BiX } from "react-icons/bi";
import { NavList } from "./NavList";
import { headerLinks } from "../utils/consts";
import { useRef } from "react";

export function Header() {
  const dialog = useRef<HTMLDialogElement | null>(null);

  const closeIfOutside = (e: React.MouseEvent<HTMLDialogElement, MouseEvent>) => {
    if (dialog.current && (e.target === dialog.current))
      dialog.current?.close();
  }

  return (
    <>
      <header className="primary-header container">
        <Logo />
        <button className="header-nav-toggle" onClick={() => dialog.current?.showModal()}>
          <BiMenu size={"1.5rem"}/>
          <span className="sr-only">Menu</span>
        </button>
        <NavList links={headerLinks} />
      </header>
      <dialog className="mobile-dialog" ref={dialog} onClick={closeIfOutside}>
        <button className="header-nav-toggle" onClick={() => dialog.current?.close()}>
          <BiX size={"1.5rem"}/>
        </button>
        <NavList links={headerLinks} />
      </dialog>
    </>
  );
}
