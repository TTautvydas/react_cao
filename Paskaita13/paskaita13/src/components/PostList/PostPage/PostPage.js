import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const POST_HOST = process.env.REACT_APP_POST_HOST;

export default function PostPage() {
  const [post, setPost] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${POST_HOST}/${id}`)
      .then(({ data }) => setPost(data))
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
}
