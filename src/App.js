
import React, { useState } from "react";
import "./App.css";
import data from "./components/data.js";

function App() {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(number);
    if (number <= 0) {
      amount = 1;
      alert(" Ayyo ! you know that you wrote negative input 😵");
    }
    if (number > 8) {
      amount = 8;
      alert(
        " Ayyo ! you are demanding very much paragraph in one go, kindly take little litlle 😀"
      );
    }
    setText(data.slice(0, amount));
  };
  return (
    <section>
      <h1>TIRED OF BORING LOREM IPSUM?</h1>
      <form className="main-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button className="btn">generate</button>
      </form>
      <article className="para-container">
        {text.map((item, index) => {
          return <p key={index} id="main-paras">{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;