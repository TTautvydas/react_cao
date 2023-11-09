import "./App.css";
import PostList from "./components/PostList/PostList";
import PostPage from "./components/PostList/PostPage/PostPage";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/posts/:id" element={<PostPage />} />
      </Routes>
    </div>
  );
}

export default App;
