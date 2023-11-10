import { useEffect, useState, createContext } from "react";
import "./App.css";
import axios from "axios";
import User from "./components/User/User";
import Website from "./components/Website/Website";

const userEndpoint = "https://jsonplaceholder.typicode.com/users/1";

export const userContext = createContext();

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get(userEndpoint)
      .then(({ data }) => setUser(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <userContext.Provider value={{ user, setUser }}>
        <User />
        <Website />
      </userContext.Provider>
    </div>
  );
}

export default App;
