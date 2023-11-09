import React from "react";

export default function Post({ body, title }) {
  return (
    <div>
      <h6> {title} </h6>
      <p> {body} </p>
    </div>
  );
}
