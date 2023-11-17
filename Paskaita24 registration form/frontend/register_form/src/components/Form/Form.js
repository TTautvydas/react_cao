import React, { useState } from "react";
import "./Form.module.css";
import axios from "axios";
import Button from "../Button/Button";

const registerEndpoint = "http://localhost:3001/";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function createUser(e) {
    e.preventDefault();
    try {
      const { data } = await axios.post(registerEndpoint, {
        name,
        email,
        password,
      });
      alert("User registered!");
      setName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      alert("Something went wrong");
    }
  }

  return (
    <div>
      <form onSubmit={createUser}>
        <label>Name</label>
        <br></br>
        <div>
          <i className="fa-regular fa-user"></i>
          <input
            id={"name"}
            type="text"
            required={true}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <label>Email</label>
        <br></br>
        <div>
          <i className="fa-regular fa-envelope"></i>
          <input
            id={"email"}
            type="text"
            required={true}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <label>Password</label>
        <br></br>
        <div>
          <i className="fa-solid fa-lock"></i>
          <input
            id={"password"}
            type="password"
            required={true}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button />
      </form>
    </div>
  );
}
