import React, { useState } from "react";
import Form from "../Form/Form";
import axios from "axios";

const registerEndpoint = "http://localhost:3001/register";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister(e) {
    e.preventDefault();
    try {
      const { data } = await axios.post(registerEndpoint, {
        username,
        password,
      });
      alert("Registration was successful");
    } catch (error) {
      alert("Something went wrong");
    }
  }

  return (
    <div>
      <form onSubmit={handleRegister}>
        <Form
          id={"username"}
          text={"Username"}
          type={"text"}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Form
          id={password}
          text={"Password"}
          type={"password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
