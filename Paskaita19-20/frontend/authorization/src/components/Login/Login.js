import React, { useState } from "react";
import Form from "../Form/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const loginEndpoint = "http://localhost:3001/login";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const { data } = await axios.post(loginEndpoint, {
        username,
        password,
      });
      alert("Successfully logged in!");
      localStorage.setItem("token", data.token);
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <Form
          id={"loginUsername"}
          onChange={(e) => setUsername(e.target.value)}
          text={"Username"}
          type={"text"}
          value={username}
        />
        <Form
          id={"loginPassword"}
          onChange={(e) => setPassword(e.target.value)}
          text={"Password"}
          type={"password"}
          value={password}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
