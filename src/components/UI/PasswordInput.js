import React, { useState} from "react";

import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";

import style from "./passwordinput.module.css";
const PasswordInput = (props) => {
  const [showPass, setshowPass] = useState(false);

  return (
    <div className={style.position}>
      <input
        refs={props.ref}
        placeholder="کلمه عبور"
        required
        type={showPass ? "text" : "password"}
      />
      <span onClick={() => setshowPass(!showPass)}>
        {showPass ? <AiFillEyeInvisible /> : <AiFillEye />}
      </span>
    </div>
  );
};
export default PasswordInput;
