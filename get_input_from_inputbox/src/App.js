import "./index.css";
import { useState } from "react";

export default function App() {
  let [data, updateData] = useState(null);
  function getVal(val) {
    updateData(val.target.value);
  }
  return (
    <div className="App">
      <h2>Get Input from input box</h2>
      <input className="input" type="text" onChange={getVal} />

      <div className="content">{data}</div>
    </div>
  );
}
