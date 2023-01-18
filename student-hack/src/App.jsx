import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const [input, setInput] = useState("");

  async function handleSubmit(e) {
    return 
  }

  return (
    <div className="App">
      <form action="" onSubmit={handleSubmit}>
        <input name="prompt" className="question" value={input} onChange={(e) => setInput(input) = e.target.value}></input>
      </form>
      <input name="" className="answer"></input>
    </div>
  );
}

export default App;
