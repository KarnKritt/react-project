import React, { useState } from "react";

const Question = ({ title, info }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <div className="question">
      <div className="header">
        <h3>{title}</h3>
        <button
          onClick={() => {
            setShowAnswer(!showAnswer);
          }}
        >
          {showAnswer ? "-" : "+"}
        </button>
      </div>
      <div className="answer">
        <p>{showAnswer ? info : ""}</p>
      </div>
    </div>
  );
};

export default Question;
