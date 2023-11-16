import React from "react";
import "./Form.module.css";

export default function Form() {
  return (
    <div>
      <form>
        <label>Name</label>
        <br></br>
        <div>
          <i className="fa-regular fa-user"></i>
          <input type="text" required={true} />
        </div>
        <label>Email</label>
        <br></br>
        <div>
          <i className="fa-regular fa-envelope"></i>
          <input type="text" />
        </div>
        <label>Password</label>
        <br></br>
        <div>
          <i className="fa-solid fa-lock"></i>
          <input type="password" />
        </div>
      </form>
    </div>
  );
}
