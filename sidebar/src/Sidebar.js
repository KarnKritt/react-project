import React from "react";
import { links } from "./data";
import { useGlobalContext } from "./context";

const Sidebar = () => {
  const { isSidebarActive, toggleSidebar } = useGlobalContext();
  return (
    <div className={`side ${isSidebarActive ? "active" : ""}`}>
      <div className="logo">
        <h1>
          LO<span>GO</span>
        </h1>
        <button className="times" onClick={toggleSidebar}>
          <i className="fas fa-times"></i>
        </button>
      </div>
      <ul className="menu">
        {links.map((link) => {
          const { id, url, text } = link;
          return (
            <li key={id}>
              <a href={url}>{text}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
