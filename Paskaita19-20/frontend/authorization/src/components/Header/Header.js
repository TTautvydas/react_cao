import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  function logoutHandler() {
    localStorage.removeItem("token");

    navigate("/login");
  }
  return (
    <header>
      <Link to={""}>Home</Link>
      {localStorage.getItem("token") !== null ? (
        <button onClick={logoutHandler}>Logout</button>
      ) : (
        <>
          <Link to={"/register"}>Register</Link>
          <Link to={"/login"}>Login</Link>
        </>
      )}
    </header>
  );
}
