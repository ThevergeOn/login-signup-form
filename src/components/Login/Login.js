import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Button from "../UI/Button";
import style from "./login.module.css";
import PasswordInput from "../UI/PasswordInput";
const Login = (props) => {
  const handelClick = (event) => {
    if (emailRef.current.value.length > 0) {
      return alert("شما با موفقيت وارد شديد");
    } else {
      alert("Invalid data");
    }
  };
  let emailRef = useRef();
  return (
    <form className={style.form}>
      <h1>خوش آمديد</h1>
      <div>
        <input
          ref={emailRef}
          type="email"
          placeholder="پست الکترونیک"
          required
        />
      </div>
      <PasswordInput />
      <div>
        <span className={style.divspan}>فراموش كرديد؟</span>
      </div>
      <Button onClick={handelClick}>ورود</Button>
    </form>
  );
};
export default Login;
