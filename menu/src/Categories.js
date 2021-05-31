import React from "react";

const Categories = ({ categories, filterCat }) => {
  return (
    <>
      {categories.map((category, index) => {
        return (
          <button
            className="btn"
            id={index}
            onClick={() => {
              filterCat(`${category}`);
            }}
          >
            {category}
          </button>
        );
      })}
    </>
  );
};

export default Categories;
