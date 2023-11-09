import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal/Modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(true);

  function handleButton() {
    setIsModalOpen((prev) => !prev);
  }

  return (
    <div>
      <button onClick={handleButton}>Open</button>
      <Modal
        isOpen={isModalOpen}
        title={"Something"}
        onClose={() => setIsModalOpen(false)}
      >
        <h1>This is a child</h1>
        <p>child Paragraph</p>
      </Modal>
      <Modal
        isOpen={isSecondModalOpen}
        title={"Antras Modal"}
        onClose={() => {
          setIsSecondModalOpen(false);
          setIsModalOpen(true);
        }}
      >
        <p>This is second modal paragraph</p>
        <input type="text" />
        <button onClick={() => console.log("antro modal button")}>
          {" "}
          submit{" "}
        </button>
      </Modal>
    </div>
  );
}

export default App;
