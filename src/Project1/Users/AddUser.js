import React, { useState } from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../../Wrapper/Wrapper";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState(" ");
  const [enteredAge, setEnteredAge] = useState(" ");
  const [error, setError] = useState(" ");

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.length === 0 || enteredAge.length === 0) {
      setError({
        title: "Invalid input",
        message: "please enter the valid name or age (non-empty values)",
      });
      return;
    }
    if (enteredAge < 1) {
      setError({
        title: "Invalid input",
        message: "please enter the valid age (non-empty values)",
      });
      return;
    }

    props.onAddUsers(enteredUsername, enteredAge);
    setEnteredUsername(" ");
    setEnteredAge(" ");
  };
  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const errorHandler = () => {
    setError(null);
  };
  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClickBtn={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            placeholder="Enter input"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age( Years )</label>
          <input
            id="age"
            placeholder="Enter age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};
export default AddUser;
