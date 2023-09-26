import "./index.css";
import { useState } from "react";
export default function App() {
  const [name, setName] = useState("No name Entred");
  const [tnc, setTnc] = useState(false);
  const [interest, setInterest] = useState("No interest selected");

  function getFormData(e) {
    console.log(name, interest, tnc);
    alert(
      `your name is ${name}\nYour interest in ${interest} comics\n${interest ? "You good to go" : "Please Agree to T&C"
      }`
    );
    e.preventDefault();
  }

  return (
    <div className="App">
      <h2>Get Form Data in React</h2>
      <form onSubmit={getFormData}>
        <input
          type="textfield"
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
        />{" "}
        <br />
        <br />
        <select onChange={(e) => setInterest(e.target.value)}>
          <option>Select comic</option>
          <option>Marvel</option>
          <option>DC</option>
          <option>Disney</option>
        </select>
        <br />
        <br />
        <input
          type="checkbox"
          onChange={(e) => setTnc(e.target.checked)}
        />{" "}
        <span>Agree Term and Condition</span>
        <br />
        <br />
        <button type="submit">Submit</button>
        <br />
        <br />
      </form>
    </div>
  );
}
