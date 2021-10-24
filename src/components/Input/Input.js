import React from "react";
import style from "./Input.module.css";

const Input = (props) => {
  return (
    <input
      className={props.className}
      onChange={(e) => props.setValue(e.target.value)}
      value={props.value}
      type={props.type}
      placeholder={props.placeholder}
    />
  );
};
export default Input;
