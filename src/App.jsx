import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import * as Tone from "tone";

function App() {
  const [count, setCount] = useState(0);

  const synth = new Tone.Synth().toDestination();

  //play a middle 'C' for the duration of an 8th note
  const play = () => {
    synth.triggerAttackRelease("C4", "8n");
    console.log("HEllo");
  };

  return (
    <>
      <div>
        <button onClick={play}>Weiii</button>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
