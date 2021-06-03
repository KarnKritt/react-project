import React, { useState } from "react";
import Values from "values.js";
import SingleColor from "./SingleColor";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
    }
  };
  return (
    <div className="container">
      <section>
        <h1>Color Generator</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="color"
            id="color"
            placeholder="#f15025"
            value={color}
            onChange={(e) => {
              setColor(e.target.value);
            }}
            className={error ? "error" : ""}
          />
          <button type="submit">Generate</button>
        </form>
      </section>
      <section>
        {list.map((color, index) => {
          return (
            <SingleColor key={index} {...color} index={index} hex={color.hex} />
          );
        })}
      </section>
    </div>
  );
}

export default App;
