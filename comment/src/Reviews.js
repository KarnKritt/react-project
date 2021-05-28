import React, { useState } from "react";
import people from "./data";

const Reviews = () => {
  const [person, setPerson] = useState(0);
  const { id, name, job, img, text } = people[person];
  const prevPerson = () => {
    let newPerson = person - 1;
    if (newPerson < 0) {
      newPerson = people.length - 1;
    }
    setPerson(newPerson);
  };
  const nxtPerson = () => {
    let newPerson = person + 1;
    if (newPerson > people.length - 1) {
      newPerson = 0;
    }
    setPerson(newPerson);
  };
  const randomPerson = () => {
    setPerson(randNumb());
  };

  const randNumb = () => {
    return Math.floor(Math.random() * people.length);
  };

  return (
    <div id={id} className="person">
      <img src={img} alt={name} className="pic" />
      <h3>{name}</h3>
      <h4>{job}</h4>
      <p>{text}</p>
      <div className="btns">
        <button>
          <i class="fas fa-chevron-left" onClick={prevPerson}></i>
        </button>
        <button>
          <i class="fas fa-chevron-right" onClick={nxtPerson}></i>
        </button>
      </div>
      <button className="btns fas" onClick={randomPerson}>
        Random
      </button>
    </div>
  );
};

export default Reviews;
