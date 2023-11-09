import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "../../Post/Post";

const ENDPOINT = "https://jsonplaceholder.typicode.com/posts";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  //   const [titleInput, setTitleInput] = useState("");
  //   const [bodyInput, setBodyInput] = useState("");

  useEffect(() => {
    axios
      .get(ENDPOINT)
      .then(({ data }) => {
        setPosts(data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    console.log(posts);
  }, [posts]);

  return (
    <div>
      <div>
        {/* <label htmlFor="">Title</label>
        <input type="text" /> <br />
        <label htmlFor="">Body</label>
        <input type="text" />
        <button>Submit</button> */}
      </div>

      {posts.length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        posts.map((post) => <Post title={post.title} body={post.body} />)
      )}
    </div>
  );
}
