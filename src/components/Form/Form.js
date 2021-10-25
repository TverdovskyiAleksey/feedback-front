import React, { useState } from "react";
import { feedback } from "../../actions/user";
import Input from "../Input/Input";
import style from "./Form.module.css";
import logo from "./MaskGroup.png";
import vector3 from "./Vector3.png";
import vector1 from "./Vector1.png";
import vector2 from "./Vector2.png";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function btnClick() {
    feedback(name, email, message);
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <div className={style.wrapper}>
      <img className={style.img1} src={vector1} alt="" />
      <img className={style.img2} src={vector2} alt="" />
      <img className={style.img3} src={vector3} alt="" />
      <img className={style.img} src={logo} alt="" />
      <div className={style.formContainer}>
        <h1 className={style.title}>Reach out to us!</h1>
        <Input
          className={style.input}
          value={name}
          setValue={setName}
          type="text"
          placeholder="Your name*"
        />
        <Input
          className={style.input}
          value={email}
          setValue={setEmail}
          type="text"
          placeholder="Your e-mail*"
        />
        <textarea
          className={style.textarea}
          cols="30"
          rows="10"
          value={message}
          setValue={setMessage}
          type="text"
          placeholder="Your message*"
        ></textarea>
        <button className={style.btn} onClick={btnClick}>
          Send message
        </button>
      </div>
    </div>
  );
};
export default Form;
