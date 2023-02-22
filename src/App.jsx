import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [people, setPeople] = useState(data);
  const [btn, setBtn] = useState("Clear all");
  const toggleBtn = () => {
    if (btn === "Clear all") {
      setBtn("Restore");
    } else {
      setBtn("Clear all");
      setPeople(data);
    }
  };
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button
          onClick={() => {
            setPeople([]);
            toggleBtn();
          }}
        >
          {btn}
        </button>
      </section>
    </main>
  );
}

export default App;
