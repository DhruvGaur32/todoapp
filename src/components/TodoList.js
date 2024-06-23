import React from 'react';

function TodoList(props) {
  return (
    <li className={`list-item ${props.item.completed ? 'completed' : ''}`}>
      {props.item.text}
      <span className="icons">
        <i 
          className="fa-solid fa-check icon-complete" 
          onClick={() => props.toggleComplete(props.index)}
        ></i>
        <i 
          className="fa-solid fa-trash-can icon-delete" 
          onClick={() => props.deleteItem(props.index)}
        ></i>
      </span>
    </li>
  );
}

export default TodoList;
