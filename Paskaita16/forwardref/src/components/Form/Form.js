import React, { useRef } from "react";
import Input from "../Input/Input";

export default function Form() {
  const inputRef = useRef(null);

  function handleButton() {
    inputRef.current.focus();
  }
  return (
    <div>
      <input type="text" />
      <br />
      <Input text={"input component"} ref={inputRef} />
      <br />
      <Input text={"input component"} />
      <br />
      <Input text={"input component"} />
      <br />
      <Input text={"input component"} />

      <button onClick={handleButton}>Focus</button>
    </div>
  );
}
