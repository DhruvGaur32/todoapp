import React, { useState } from 'react';
import "./App.css";
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  const [listTodo, setListTodo] = useState([]);

  const addList = (inputText) => {
    if (inputText !== '') {
      setListTodo([...listTodo, { text: inputText, completed: false }]);
    }
  };

  const deleteListItem = (index) => {
    const newListTodo = listTodo.filter((_, i) => i !== index);
    setListTodo(newListTodo);
  };

  const toggleComplete = (index) => {
    const newListTodo = listTodo.map((item, i) => {
      if (i === index) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setListTodo(newListTodo);
  };

  return (
    <div className="main-container">
      <div className="center-container">
        <TodoInput addList={addList} />
        <h1 className="app-heading">TODO</h1>
        <hr />
        <ul>
          {listTodo.map((listItem, i) => (
            <TodoList 
              key={i} 
              index={i} 
              item={listItem} 
              deleteItem={deleteListItem}
              toggleComplete={toggleComplete}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
