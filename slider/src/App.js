import React, { useState, useEffect } from "react";
import items from "./data";

function App() {
  const [value, setValue] = useState(0);

  let newVar = value;
  const addVar = () => {
    newVar += 1;
    if (newVar > items.length - 1) {
      newVar = 0;
    }
    setValue(newVar);
  };
  const decVar = () => {
    newVar -= 1;
    if (newVar < 0) {
      newVar = items.length - 1;
    }
    setValue(newVar);
  };

  useEffect(() => {
    let a = setInterval(() => {
      setValue(newVar);
      addVar();
    }, 3000);
    return () => clearInterval(a);
  });

  return (
    <div className="container">
      <h1>Reviews</h1>
      <div className="display">
        <button
          onClick={() => {
            decVar();
          }}
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <div className="persons">
          {items.map((item, index) => {
            let position = "nxt";
            if (newVar === index) {
              position = "active";
            }
            if (
              newVar === index - 1 ||
              (index === 0 && newVar === items.length - 1)
            ) {
              position = "prev";
            }
            const { image, name, title, quote, id } = item;
            return (
              <div key={id} className={`person ${position}`}>
                <img src={image} alt={name} />
                <h2>{name}</h2>
                <h3>{title}</h3>
                <p>{quote}</p>
              </div>
            );
          })}
        </div>
        <button
          onClick={() => {
            addVar();
          }}
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}

export default App;
