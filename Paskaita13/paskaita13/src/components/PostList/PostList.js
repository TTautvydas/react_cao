import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const POST_HOST = process.env.REACT_APP_POST_HOST;

export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(POST_HOST)
      .then(({ data }) => {
        setPosts(data);
        console.log(data);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  const allPosts = useMemo(() => {
    return posts;
  }, [posts]);

  return (
    <div>
      {allPosts.map((post) => {
        return (
          <Link to={`/posts/${post.id}`}>
            <li>Post {post.id}</li>
          </Link>
        );
      })}
    </div>
  );
}
