import React from "react";

export default function Form({ text, value = "", onChange, id, type }) {
  return (
    <div>
      <label htmlFor={id}>{text}</label> <br></br>
      <input type={type} id={id} value={value} onChange={onChange} />
    </div>
  );
}
