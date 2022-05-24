import "./App.css";
import React from "react";
import ToDoComponant from "./Todo_React/ToDoComponant";
const App = () => {
  return (
    <React.StrictMode className="container ">
      <ToDoComponant />
    </React.StrictMode>
  );
};

export default App;
