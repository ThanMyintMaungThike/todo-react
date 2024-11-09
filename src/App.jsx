import React, { useRef, useState } from "react";
import { Item } from "./Item";

export const App = () => {
  const inputRef = useRef();

  const [data, setData] = useState([
    { id: 1, name: "Apple", done: true },
    { id: 2, name: "Banana", done: false },
    { id: 3, name: "Orange", done: false },
  ]);

  const add = (name) => {
    const id = data[data.length - 1].id + 1;
    setData([...data, { id, name, done: false }]);
  };

  const remove = (id) => {
    setData(data.filter((data) => data.id !== id));
  };

  const toggle = (id) => {
    setData(
      data.map((item) => {
        if (item.id === id) item.done = !item.done;
        return item;
      })
    );
  };

  return (
    <div>
      <h1>Todo List ({data.filter((item) => !item.done).length})</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          const name = inputRef.current.value;
          if (!name) return false;
          add(name);

          inputRef.current.value = "";
          inputRef.current.focus();
        }}>
        <input type="text" ref={inputRef} />
        <button>Add</button>
      </form>

      <ul>
        {data
          .filter((item) => !item.done) 
          .map((item) => {
            return (
              <Item key={item.id} item={item} remove={remove} toggle={toggle} />
            );
          })}
      </ul>

      <hr />

      <ul>
        {data
          .filter((item) => item.done)
          .map((item) => {
            return (
              <Item key={item.id} item={item} remove={remove} toggle={toggle} />
            );
          })}
      </ul>
    </div>
  );
};
