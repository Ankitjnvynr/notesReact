import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Notes from "./components/Notes";
import NewNote from "./components/NewNote";
import LoginPage from "./components/LoginPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="max-w-[337px] bg-slate-300 min-h-[100vh] m-auto p-3 rounded-lg">
      <NavBar />
      <NewNote />
      <Notes/>
      {/* <LoginPage /> */}
    </div>
  );
}

export default App;
