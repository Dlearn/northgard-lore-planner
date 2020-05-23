import React, { useState } from "react";

import LoreRow from "./components/LoreRow";

import loreStag from "./clans/0320-stag";

import iconLore from "./images/icon-lore.png";
import "./App.css";

function App() {
  const [selectedLores, setSelectedLores] = useState([0, 2, 4]);

  const onDeselectLore = (row) => {
    if (selectedLores[selectedLores.length - 1] === row) {
      const withoutLastLore = [...selectedLores];
      withoutLastLore.pop();
      setSelectedLores(withoutLastLore);
    }
  };

  const onSelectLore = (row) => {
    setSelectedLores([...selectedLores, row]);
  };

  return (
    <div className="body">
      <h1>
        <img alt="Icon lore" className="iconLore" src={iconLore} />
        Northgard Lore Planner
      </h1>
      <div>
        <LoreRow
          loreRow={loreStag[0]}
          onDeselectLore={onDeselectLore}
          onSelectLore={onSelectLore}
          row={0}
          selectedLores={selectedLores}
        />
        <LoreRow
          loreRow={loreStag[1]}
          onDeselectLore={onDeselectLore}
          onSelectLore={onSelectLore}
          row={2}
          selectedLores={selectedLores}
        />
        <LoreRow
          loreRow={loreStag[2]}
          onDeselectLore={onDeselectLore}
          onSelectLore={onSelectLore}
          row={4}
          selectedLores={selectedLores}
        />
      </div>
    </div>
  );
}

export default App;
