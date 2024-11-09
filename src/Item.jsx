import React from "react";

export const Item = ({ item, remove, toggle }) => {
  // const name = props;
  return (
    <div>
      <li>
        {item.done ? (
          <button onClick={() => toggle(item.id)}>Undo</button>
        ) : (
          <button onClick={() => toggle(item.id)}>Done</button> 
        )}
        {item.name}
        <button onClick={() => remove(item.id)}>Del</button>
      </li>
    </div>
  );
};
