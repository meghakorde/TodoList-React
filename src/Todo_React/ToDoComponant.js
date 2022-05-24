import React, { useState } from "react";
import Form from "./Form";
import List from "./List";
import "./Style.css";
const ToDoComponant = () => {
  const [todos, setTodos] = useState([]);
  let [completedCount, setCompletedCount] = useState(0);

  const addTodo = (text) => {
    let todo = { id: new Date().getTime(), text: text, completed: false };
    setTodos([...todos, todo]);
  };

  const removeTodo = (id, completed) => {
    let updateRemove = [...todos].filter((todo) => todo.id !== id);
    if (completed === true) {
      setCompletedCount(completedCount - 1);
    }
    setTodos(updateRemove);
  };
  const completeTodo = (index, completed) => {
    let item = todos[index];
    item.completed = !completed;
    if (item.completed === true) {
      setCompletedCount(completedCount + 1);
    } else {
      setCompletedCount(completedCount - 1);
    }
  };

  return (
    <div className="ToDoComponant">
      <Form addTodo={addTodo} />
      <div className="List_Heading">
        <h3>TODO LIST:</h3>
        <p>
          Completed {completedCount}/{todos.length}
        </p>
      </div>
      <List todo={todos} removeTodo={removeTodo} completeTodo={completeTodo} />
    </div>
  );
};
export default ToDoComponant;
