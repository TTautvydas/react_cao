import React from "react";
import styles from "./Button.module.css";

export default function Button() {
  return (
    <button className={styles.submitButton} type="submit">
      Submit
    </button>
  );
}
