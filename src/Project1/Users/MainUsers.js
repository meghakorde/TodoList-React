import React, { useState } from "react";
import Card from "../UI/Card";
import AddList from "./AddList";
import AddUser from "./AddUser";

const MainUsers = () => {
  const [enteredList, setEnteredList] = useState([]);

  const addUserHandler = (listName, listAge) => {
    setEnteredList((prevUsersList) => {
      return [...prevUsersList, { name: listName, age: listAge }];
    });
  };
  return (
    <Card>
      <AddUser onAddUsers={addUserHandler} />
      <AddList users={enteredList} />
    </Card>
  );
};
export default MainUsers;
