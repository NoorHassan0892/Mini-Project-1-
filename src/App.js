import logo from "./logo.svg";
import "./App.css";
import { PostCard } from "./components/PostCard";
import { PostList } from "./components/PostList";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <PostList />
    </div>
  );
}

export default App;
