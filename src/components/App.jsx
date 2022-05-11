import React, { useState } from "react";
import ToDoItem from "./list";

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

  function deleteItem(id) {
    setItem((prev) => {
      return prev.filter((items, index) => {
        return index !== id;
      });
    });
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
          {items.map((item, index) => (
            <ToDoItem
              onChecked={deleteItem}
              key={index}
              text={item}
              id={index}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
