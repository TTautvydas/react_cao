import React from "react";
import style from "./Button.module.css";

export default function Button({ text, onClick }) {
  return (
    <button onClick={onClick} className={style.buttonStyle}>
      {text}
    </button>
  );
}
