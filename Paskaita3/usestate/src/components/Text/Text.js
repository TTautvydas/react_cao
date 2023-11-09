import React, { useState } from "react";
import Text2 from "../Text2/Text2";

export default function Text() {
  const [numberState, setNumberState] = useState(0);
  const [text, setText] = useState("Hello");

  function buttonHandler() {
    setNumberState(numberState + 1);
    setText("Changing the text");
  }
  return (
    <div>
      {numberState}
      <button onClick={buttonHandler}>Click me</button>
      <Text2 text={text} />
    </div>
  );
}
