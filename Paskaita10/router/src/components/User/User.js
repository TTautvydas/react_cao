import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function User() {
  const [user, setUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(({ data }) => setUser(data))
      .catch((err) => console.log(err));
  }, [id]);
  return <div>{user.name}</div>;
}
