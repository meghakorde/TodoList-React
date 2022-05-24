import React, { useState } from "react";

const Input = (props) => {
  const [inputValue, setInputValue] = useState('');

  const submitHandlerTodo = (e) => {
    e.preventDefault();
    if (inputValue !== " ") {
      props.addTodo(inputValue);
    } else {
      alert("Todos Required");
    }
    setInputValue(" ");
  };
  return (
    <>
      <form onSubmit={submitHandlerTodo} className="InputBox">
        <input
          type="text"
          name="text"
          value={inputValue}
          required
          placeholder="Enter ToDo"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
export default Input;
