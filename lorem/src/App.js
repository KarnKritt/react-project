import React, { useState } from "react";
import data from "./data";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (amount <= 0) {
      amount = 1;
    }
    if (amount > data.length) {
      amount = data.length;
    }

    setText(data.slice(0, amount));
  };

  return (
    <div className="container">
      <h1>Tired of Lorem Ipsum</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraph :</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => {
            setCount(e.target.value);
          }}
        />
        <button className="btn" type="submit">
          Generate
        </button>
      </form>
      <div className="show">
        {text.map((lorem, index) => {
          return <p key="index">{lorem}</p>;
        })}
      </div>
    </div>
  );
}

export default App;
