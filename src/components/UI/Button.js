import React from "react";
import styles from "./Button.module.css";
const Button = (props) => {
  return (
    <button ref={props.refs} type="submit" className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};
export default Button;
