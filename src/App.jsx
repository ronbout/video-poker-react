import { useState } from "react";
import "./styles/App.css";
import "./styles/button.css";
import Layout from "./components/Layout";
import Game from "./pages/Game";
import Paytable from "./pages/Paytable";

function App() {
  const [pageDisplay, setPageDisplay] = useState("game");

  return (
    <>
      <div>
        <Layout>{"game" === pageDisplay ? <Game /> : <Paytable />}</Layout>
      </div>
      <button
        onClick={() =>
          setPageDisplay((prev) => ("game" === prev ? "paytable" : "game"))
        }
      >
        {"game" === pageDisplay ? "Paytable" : "Game"}
      </button>
    </>
  );
}

export default App;
