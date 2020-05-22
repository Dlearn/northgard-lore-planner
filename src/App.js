import React from "react";
import Lore from "./components/Lore";
import iconLore from "./images/icon-lore.png";
import iconSharpAxes from "./images/icon-common/sharp-axes.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={iconLore} className="App-logo" alt="logo" />
        <div>
          <div style={{ display: "flex" }}>
            <div className="background background-root">
              <Lore
                alt="Sharp axes icon"
                src={iconSharpAxes}
                title="Sharp Axes"
              />
            </div>
            <div className="background background-branch">
              <Lore
                alt="Sharp axes icon"
                src={iconSharpAxes}
                title="Sharp Axes"
              />
              <Lore
                alt="Sharp axes icon"
                src={iconSharpAxes}
                title="Sharp Axes"
              />
            </div>
            <div className="background background-branch">
              <Lore
                alt="Sharp axes icon"
                src={iconSharpAxes}
                title="Sharp Axes"
              />
              <Lore
                alt="Sharp axes icon"
                src={iconSharpAxes}
                title="Sharp Axes"
              />
            </div>
            <div className="background background-leaf">
              <Lore
                alt="Sharp axes icon"
                src={iconSharpAxes}
                title="Sharp Axes"
              />
              <Lore
                alt="Sharp axes icon"
                src={iconSharpAxes}
                title="Sharp Axes"
              />
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div className="background background-root">
              <Lore
                alt="Sharp axes icon"
                src={iconSharpAxes}
                title="Sharp Axes"
              />
            </div>
            <div className="background background-branch">
              <Lore
                alt="Sharp axes icon"
                src={iconSharpAxes}
                title="Sharp Axes"
              />
              <Lore
                alt="Sharp axes icon"
                src={iconSharpAxes}
                title="Sharp Axes"
              />
            </div>
            <div className="background background-branch">
              <Lore
                alt="Sharp axes icon"
                src={iconSharpAxes}
                title="Sharp Axes"
              />
              <Lore
                alt="Sharp axes icon"
                src={iconSharpAxes}
                title="Sharp Axes"
              />
            </div>
            <div className="background background-leaf">
              <Lore
                alt="Sharp axes icon"
                src={iconSharpAxes}
                title="Sharp Axes"
              />
              <Lore
                alt="Sharp axes icon"
                src={iconSharpAxes}
                title="Sharp Axes"
              />
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div className="background background-root">
              <Lore
                alt="Sharp axes icon"
                src={iconSharpAxes}
                title="Sharp Axes"
              />
            </div>
            <div className="background background-branch">
              <Lore
                alt="Sharp axes icon"
                src={iconSharpAxes}
                title="Sharp Axes"
              />
              <Lore
                alt="Sharp axes icon"
                src={iconSharpAxes}
                title="Sharp Axes"
              />
            </div>
            <div className="background background-branch">
              <Lore
                alt="Sharp axes icon"
                src={iconSharpAxes}
                title="Sharp Axes"
              />
              <Lore
                alt="Sharp axes icon"
                src={iconSharpAxes}
                title="Sharp Axes"
              />
            </div>
            <div className="background background-leaf">
              <Lore
                alt="Sharp axes icon"
                src={iconSharpAxes}
                title="Sharp Axes"
              />
              <Lore
                alt="Sharp axes icon"
                src={iconSharpAxes}
                title="Sharp Axes"
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
