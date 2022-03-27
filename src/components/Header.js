import React, { useState, useRef } from "react";
import styles from "./header.module.css";

import Login from "./Login/Login";
import Signup from "./Signup/Signup";
const Header = (props) => {
  const [login, setLogin] = useState(true);
 const colorRef = useRef();
 const colorLog = useRef();
const handelRegister = () => {
 setLogin(false);
  colorRef.current.style.backgroundColor = "#19af82";
  colorLog.current.style.backgroundColor = "#6a656c";
};
const handelLogin = () => {
 setLogin(true);
  colorRef.current.style.backgroundColor = "#6a656c";
  colorLog.current.style.backgroundColor = "#19af82";
};

  return (
    <>
      <header className={styles.header}>
        <button ref={colorLog} onClick={handelLogin} type="button">
          ورود
        </button>
        <button style={{backgroundColor:"gray"}} ref={colorRef} onClick={handelRegister} type="button">
          ثبت نام
        </button>
      </header>
      {login ? <Login /> : <Signup />}
    </>
  );
};
export default Header;
