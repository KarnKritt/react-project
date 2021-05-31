import React from "react";

const Menus = ({ menus }) => {
  let items = menus.map((item) => {
    return (
      <div key={item.id} className="menu">
        <div className="imgBox">
          <img src={item.img} alt={item.name} />
        </div>
        <div className="det">
          <h3>
            {item.title} <span>$ {item.price}</span>
          </h3>
          <p>{item.desc}</p>
        </div>
      </div>
    );
  });
  return items;
};

export default Menus;
