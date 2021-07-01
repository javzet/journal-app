import { MutableRefObject } from "react";

export const Appbar = ({
  menuIconRef,
  onToggleClick,
  appbarRef,
}: {
  menuIconRef: MutableRefObject<any>;
  appbarRef: MutableRefObject<any>;
  onToggleClick: () => void;
}) => {
  return (
    <nav className="appbar" ref={appbarRef}>
      <span>30 de junio de 2021</span>

      <div className="appbar-buttons">
        <button className="appbar-button">Picture</button>
        <button className="appbar-button">Save</button>
      </div>

      <div className="menu-icon" ref={menuIconRef} onClick={onToggleClick}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
};
