import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");

  function itemadded(event) {
    setText(event.target.value);
  }

  const [items, setItem] = useState([]);

  function list() {
    setItem((prev) => {
      return [...prev, text];
    });
    setText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={itemadded} type="text" value={text} />
        <button onClick={list}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
