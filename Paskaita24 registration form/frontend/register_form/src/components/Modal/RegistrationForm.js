import React from "react";
import { createPortal } from "react-dom";
import SocialButton from "../SocialButton/SocialButton";
import Form from "../Form/Form";
import Button from "../Button/Button";
import styles from "../Modal/RegistrationForm.module.css";
import StaticText from "../StaticText/StaticText";

export default function RegistrationForm({
  open,
  request,
  children,
  title,
  onClose,
}) {
  if (!open) {
    return null;
  }

  return createPortal(
    <div className={styles.modalContainer}>
      <div className={styles.mainContainer}>
        <img
          className={styles.mainImage}
          src="https://img.freepik.com/free-vector/hacker-operating-laptop-cartoon-icon-illustration-technology-icon-concept-isolated-flat-cartoon-style_138676-2387.jpg?w=2000"
          alt="Logo"
        />

        <div className={styles.textContainer}>
          <StaticText />
          <SocialButton />
          <p>Or</p>
          <Form />
          <Button />
        </div>
        <button className={styles.closeButton} onClick={onClose}>
          X
        </button>
      </div>
    </div>,
    document.body
  );
}
