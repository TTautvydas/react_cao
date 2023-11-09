import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const usersEndpoint = "http://localhost:3001/users";

export default function Home() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      navigate("/login");
    } else {
      axios
        .get(usersEndpoint, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then(({ data }) => setUsers(data))
        .catch((error) => alert(error.message));
    }
  }, []);

  return (
    <div>
      {users.map((user) => (
        <div key={user._id}>
          <p>{user.username}</p>
          <p>{user.password}</p>
        </div>
      ))}
    </div>
  );
}
