import React, { useState } from "react";
import styles from "../TextInput/TextInput.module.css";

export default function TextInput({
  startIcon,
  endIcon,
  placeholder,
  required,
  onChange,
  isValid,
  notValid,
  validated,
}) {
  return (
    <>
      <div className={styles.wrapper}>
        {startIcon}
        <input
          className={styles.input}
          type="text"
          required={required}
          placeholder={placeholder}
          onChange={onChange}
        />
        {endIcon}
      </div>
      {isValid ? (
        <p className={styles.greenText}>{validated}</p>
      ) : (
        <p className={styles.redText}>{notValid}</p>
      )}
    </>
  );
}
