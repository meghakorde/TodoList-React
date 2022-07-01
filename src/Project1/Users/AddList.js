import React from "react";
import Card from "../UI/Card";
import classes from "./AddList.module.css"

const AddList = (props) => {
  return (
    <Card className={classes.users}>
      <ul className="list">
        {props.users.map((user) => (
          <li key={ user.id}>
            {user.name}({user.age}year old)
          </li>
        ))}
      </ul>
    </Card>
  );
};
export default AddList;
