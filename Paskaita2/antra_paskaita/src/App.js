import "./App.css";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";

function App() {
  return (
    <div>
      <Button
        className={"greenText"}
        text={"tekstas ant mygtuko"}
        onClick={() => {
          console.log("Pirmas mygtukas");
        }}
      />
      <Button text={"kitoks"} onClick={() => console.log("Antras mygtukas")} />
      <Input />
    </div>
  );
}

export default App;
