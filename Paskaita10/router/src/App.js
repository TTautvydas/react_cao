import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import Home from "./components/Home/Home";
import User from "./components/User/User";

function App() {
  return (
    <div>
      <header>
        <Link to={"/About"}>About</Link>
        <Link to={"/Contacts"}>Contacts</Link>
        <Link to={"/"}>Home</Link>
      </header>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={"Page not found"} />
        {/* route su params /: reiksme yra tokiu pat pavadinimu, siuo atveju 'id' (consolej issiloginant params) */}
        <Route path="/user/:id" element={<User />} />
      </Routes>
      <footer>Cia yra footer</footer>
    </div>
  );
}

export default App;
