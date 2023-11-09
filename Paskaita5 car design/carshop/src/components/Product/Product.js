import React from "react";
import Button from "../Button/Button";
import pageStyle from "./Product.module.css";
import { useState } from "react";

export default function Product({
  image,
  title,
  price,
  description,
  availability,
  category,
}) {
  const [number, setNumber] = useState(0);
  return (
    <div className={pageStyle.mainDivContainer}>
      <div>
        <img src={image} alt="calendar-logo" style={{ width: "700px" }}></img>
      </div>
      <div className={pageStyle.itemPropertiesDiv}>
        <h2>{title}</h2>
        <h3>{price}</h3>
        <p style={{ whiteSpace: "pre-wrap" }}>{description}</p>
        <h5>Availability: {availability}</h5>
        <button
          style={{
            backgroundColor: "white",
            border: "1px solid lightgray",
            width: "25px",
            height: " 25px",
          }}
          onClick={() => setNumber((prev) => prev - 1)}
        >
          {"-"}
        </button>
        <input
          value={number}
          readOnly={true}
          style={{
            padding: "0",
            border: "0px",
            width: "30px",
            height: "25px",
            textAlign: "center",
          }}
        ></input>
        <button
          style={{
            backgroundColor: "white",
            border: "1px solid lightgray",
            width: "25px",
            height: " 25px",
          }}
          onClick={() => setNumber((prev) => prev + 1)}
        >
          {"+"}
        </button>
        <Button text={"ADD TO CART"} />
        <hr></hr>
        <p>Category: {category}</p>
      </div>
    </div>
  );
}
