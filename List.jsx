import React, { useState } from "react";
import people from "./data";
import "./App.css";

function List() {
  const [birthdayPeople, setPeople] = useState(people);

  const clearAllPeople = () => {
    setPeople([]);
  };
  //strictmode shows multiple logs
  console.log(birthdayPeople);

  return (
    <>
      <h2>{birthdayPeople.length} Birthdays Today</h2>
      {birthdayPeople.map((person) => {
        const { id, name, age, image } = person;
        return (
          <section className="container" key={id}>
            <img src={image}></img>
            <h2>{name}</h2>
            <h3>{age}</h3>
          </section>
        );
      })}
      <button type="btn" onClick={clearAllPeople}>
        Clear all
      </button>
    </>
  );
}

export default List;
