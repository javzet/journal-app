import { MutableRefObject } from "react";
import { JournalEntries } from "./JournalEntries";
import { CalendarImage } from "../images/CalendarImage";
import { Moon, Logout } from "../images/Icons";
export const Sidebar = ({ asideRef }: { asideRef: MutableRefObject<any> }) => {
  return (
    <aside className="journal__sidebar" ref={asideRef}>
      <div className="sidebar-header">
        <h2>
          <Moon />
          <span>Buenas Noches, Nombre</span>
        </h2>
        <button>
          <Logout />
          <span>Logout</span>
        </button>
      </div>
      <div className="sidebar-add">
        <button>
          <CalendarImage />
          <span>New entry</span>
        </button>
      </div>
      <JournalEntries />
    </aside>
  );
};
