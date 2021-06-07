import React, { useState } from "react";
import { links, social } from "./data";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      {" "}
      <div className="nav">
        <div className="logo">
          <h1>
            LO<span>GO</span>
          </h1>
          <button className="bars" onClick={() => setShowMenu(!showMenu)}>
            <i class="fas fa-bars"></i>
          </button>
        </div>

        <div className="menu">
          <ul className={`menu-nav ${showMenu ? "showNav" : ""}`}>
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
        <ul className="soc">
          {social.map((soc) => {
            const { id, url, icon } = soc;
            return (
              <li key={id}>
                <a href={url}>
                  <i class={icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Nav;
