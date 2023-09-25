import "./index.css";
import React, { useState } from "react";

export default function App() {
  const [status, setStatus] = React.useState(true);
  return (
    <div className="App">
      {status ? <h1>Hello Worlds</h1> : null}

      {/* //Double button */}
      <button onClick={() => setStatus(false)}>Hide</button>
      <button onClick={() => setStatus(true)}>Show</button>

      {/* //Single button */}
      {/* <button onClick={() => setStatus(!status)}>Toggle</button> */}
    </div>
  );
}
