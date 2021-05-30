import React from "react";
import data from "./data";
import Question from "./Question";

function App() {
  return (
    <div className="container">
      <h1>Questions and Answers about login</h1>
      <div className="questions">
        {data.map((question) => {
          return <Question key={question.id} {...question} />;
        })}
      </div>
    </div>
  );
}

export default App;
