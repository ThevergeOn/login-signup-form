import React, { useState, useEffect } from "react";

import Button from "../UI/Button";
import styles from "./signup.module.css";
import PasswordInput from "../UI/PasswordInput";
const Signup = (props) => {
  const [educationCity, setEducationCity] = useState(false);
  const [stateData, setStateData] = useState("");
  const [city, setcity] = useState([]);
  const showEducationCity = () => {
    setEducationCity(true);
  };
  useEffect(() => {
    fetch("/iranstates.json")
      .then((response) => response.json())
      .then((result) => {
        setStateData(result);
      });
  }, []);
  const handelChange = (event) => {
    const select = event.target.value;
    let arr = [];
    arr = select.split(",");
    setcity(arr);
  };
  const handelClick = () => {
    alert("ثبت نام موفقيت آميز بود");
  };

  return (
    <form className={styles.from}>
      <h1>رايگان ثبت نام كنيد</h1>
      <div className={styles.flex}>
        <input required placeholder="نام" type="text" />
        <input required placeholder=" نام خانوادگي" type="text" />
      </div>
      <div>
        <input
          required
          placeholder="پست الکترونیک"
          type="email"
          
        />
      </div>
      <div>
        <select
          className={styles.selectoption}
          required
          onChange={showEducationCity}
        >
          <option value="" disabled="" hidden="">
            تحصیلات
          </option>
          <option value="secondVal">کارشناسی</option>
          <option value="thirdVal">کارشناسی ارشد</option>
        </select>
      </div>
      {educationCity ? (
        <div>
          <input placeholder=" محل تحصیل" type="text" required />
        </div>
      ) : null}
      <div className={styles.flex}>
        <select
          type="text"
          onChange={handelChange}
          className={styles.selectoption}
          required
        >
          <option value="" disabled selected>
            استان
          </option>
          {Object.keys(stateData).map((State) => {
            return (
              <option value={Object.values(stateData[State])} key={State}>
                {State}
              </option>
            );
          })}
        </select>
        <select type="text" className={styles.selectoption} required>
          <option disabled selected>
            محل تولد
          </option>
          {city.map((item) => {
            return <option key={item}>{item}</option>;
          })}
        </select>
      </div>
      <PasswordInput />
      <Button onClick={handelClick}>ثبت نام</Button>
    </form>
  );
};
export default Signup ;
