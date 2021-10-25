import React from "react";

const Input = (props) => {
  return (
    <input
      className={props.className}
      onChange={(e) => props.setValue(e.target.value)}
      rows={props.rows}
      value={props.value}
      type={props.type}
      placeholder={props.placeholder}
    />
  );
};
export default Input;
