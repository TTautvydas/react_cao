import React from "react";
import styles from "./SocialButton.module.css";

export default function SocialButton() {
  return (
    <div className={styles.mainContainer}>
      <button>
        <img
          className={styles.imgStyle}
          src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
          alt="googleLogo"
        />
        <p>sign-up</p>
      </button>
      <button>
        <img
          className={styles.imgStyle}
          src="https://www.freepnglogos.com/uploads/facebook-logo-icon/facebook-logo-icon-facebook-logo-png-transparent-svg-vector-bie-supply-16.png"
          alt="fbLogo"
        />
        <p>sign-up</p>
      </button>
    </div>
  );
}
