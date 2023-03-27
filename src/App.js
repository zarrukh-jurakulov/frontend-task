import React from "react";
import "./App.css";
import sectionHeaders from "./Api/sectionHeaders.json";
import Section from "./Components/Section";

function App() {
  return (
    <div className="App">
      <nav className="navbar" />
      <main className="main">
        <aside className="sidebar" />
        <div className="content">
          <h4 className="header">Заявки</h4>
          <div className="sectionsContainer">
            {sectionHeaders?.map((item) => (
              <div className="section">
                <Section data={item} />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
