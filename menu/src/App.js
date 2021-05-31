import React, { useState } from "react";
import data from "./data";
import Categories from "./Categories";
import Menus from "./Menus";

const allCat = ["all", ...new Set(data.map((item) => item.category))];

function App() {
  const [categories, setCategories] = useState(allCat);
  const [menus, setMenus] = useState(data);

  const filterCat = (category) => {
    if (category === "all") {
      setMenus(data);
    } else {
      const newItem = data.filter((cat) => cat.category === category);
      setMenus(newItem);
    }
  };

  return (
    <div className="container">
      <h1>Our Menu</h1>
      <div className="underline"></div>
      <div className="btns">
        <Categories categories={categories} filterCat={filterCat} />
      </div>
      <div className="menus">
        <Menus menus={menus} />
      </div>
    </div>
  );
}

export default App;
