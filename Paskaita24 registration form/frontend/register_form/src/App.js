import styles from "./App.module.css";
import { useState } from "react";
import Modal from "../src/components/Modal/RegistrationForm";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleButton() {
    setIsModalOpen((prev) => !prev);
  }

  return (
    <div>
      <button onClick={handleButton} className={styles.signUp}>
        Sign up
      </button>
      <Modal
        open={isModalOpen}
        request={() => console.log("Request to db")}
        title={"Modal1"}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default App;
