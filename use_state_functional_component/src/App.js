// import "./styles.css";
import { useState } from "react";

export default function App() {
  const [data, setData] = useState(0);

  function updateState() {
    setData(data + 1);
  }
  return (
    <div className="App">
      <h1>{data}</h1>
      <button onClick={updateState}>Click me</button>
    </div>
  );
}
