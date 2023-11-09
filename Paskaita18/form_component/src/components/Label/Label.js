import React from "react";
import styles from "../Label/Label.module.css";

export default function Label({ render }) {
  return <label className={styles.label}>{render()}</label>;
}
