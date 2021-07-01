import { Sidebar } from "./Sidebar";
import { Appbar } from "./Appbar";
import { useRef } from "react";
export const JournalScreen = () => {
  const menuIconRef = useRef<HTMLDivElement>(null);
  const asidebarRef = useRef<HTMLElement>(null);
  const appbarRef = useRef<HTMLDivElement>(null);

  const menuIconToggleClick = () => {
    menuIconRef.current?.classList.toggle("hidde");
    asidebarRef.current?.classList.toggle("show");
    appbarRef.current?.classList.toggle("hidde");
  };

  return (
    <main className="journal__main-content">
      <Appbar
        menuIconRef={menuIconRef}
        appbarRef={appbarRef}
        onToggleClick={menuIconToggleClick}
      />
      <Sidebar asideRef={asidebarRef} />
      <div className="content">
        <h1>JournalScreen</h1>
      </div>
    </main>
  );
};
