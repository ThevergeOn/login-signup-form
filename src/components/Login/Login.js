import React, { useRef,useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Button from "../UI/Button";
import style from "./login.module.css";
import PasswordInput from "../UI/PasswordInput";
import validator from "validator";
const Login = (props) => {
   const handelClick = () => {
     alert("ثبت نام موفقيت آميز بود");
   };
  let emailRef = useRef();
  let submitRef=useRef();
  return (
    <form className={style.form} onSubmit={handelClick}>
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
      <Button refs={submitRef}>ورود</Button>
    </form>
  );
};
export default Login;
