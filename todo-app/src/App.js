import "./App.css";
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);

  const addTodo = () => {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const newTodo = { title: title, description: description };
    setTodoList([...todoList, newTodo]);
  };

  return (
    <div className="container">
      <h1>Todo App</h1>
      <div className="input-container">
        <input type="text" id="title" placeholder="Title" />
        <input type="text" id="description" placeholder="Description" />
        <button
          onClick={() => {
            addTodo();
          }}
        >
          Add Todo
        </button>
      </div>

      <div id="container" className="todo-container">
        {todoList.map((todoItem) => {
          return (
            <div>
              <div>{todoItem.title}</div>
              <div>{todoItem.description}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
