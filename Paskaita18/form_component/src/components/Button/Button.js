import React from "react";
import styles from "./Button.module.css";

export default function Button({ onClick, text, variant }) {
  return (
    <button
      style={{ backgroundColor: variant === "primary" ? "#4f4fc4" : "gray" }}
      onClick={onClick}
      className={styles.button}
    >
      {text}
    </button>
  );
}
