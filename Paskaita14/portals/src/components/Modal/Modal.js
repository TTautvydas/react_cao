import React from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";

export default function Modal({ title, children, isOpen, onClose }) {
  console.log(children);
  if (!isOpen) {
    return null;
  }
  return createPortal(
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.titleContainer}>
          <h4>{title}</h4>
        </div>
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.body
  );
}
