import React from "react";

import Lore from "./components/Lore";
import LoreRow from "./components/LoreRow";

import loreStag from "./clans/0320-stag";

import iconLore from "./images/icon-lore.png";
import "./App.css";

function App() {
  return (
    <div className="body">
      <h1>
        <img alt="Icon lore" className="iconLore" src={iconLore} />
        Northgard Lore Planner
      </h1>
      <div>
        <LoreRow loreRow={loreStag[0]} />
        <LoreRow loreRow={loreStag[1]} />
        <LoreRow loreRow={loreStag[2]} />
      </div>
    </div>
  );
}

export default App;
