import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  function buttonHandler() {
    navigate("/Contacts");
  }
  return (
    <div>
      <button onClick={buttonHandler}>Go to Contacts</button>
    </div>
  );
}
