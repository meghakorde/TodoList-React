import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import Card from "./Card";
import classes from "../UI/ErrorModal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} on onClick={props.onClickBtn} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.backdrop}>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title || "Error Message"}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message || "This is the error"}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onClickBtn}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClickBtn} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onClick={props.onClickBtn}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};
export default ErrorModal;
