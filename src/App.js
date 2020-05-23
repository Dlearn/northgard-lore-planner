import React, { useEffect, useState } from "react";

import LoreRow from "./components/LoreRow";

import loreStag from "./clans/0320-stag";

import iconLore from "./images/icon-lore.png";
import "./App.css";

function App() {
  const [selectedLores, setSelectedLores] = useState([]);
  useEffect(() => {
    const cleanedPathname = window.location.pathname.substr(1);
    const lores = cleanedPathname.match(/.{1,2}/g);
    if (lores) {
      setSelectedLores(lores);
    } else {
      setSelectedLores([]);
    }
  }, []);

  const onDeselectLore = () => {
    const withoutLastLore = [...selectedLores];
    withoutLastLore.pop();
    setSelectedLores(withoutLastLore);
  };

  const onSelectLore = (coordinatesRowCol) => {
    const [row, col] = coordinatesRowCol;
    setSelectedLores([...selectedLores, `${row}${col}`]);
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
      <a className="button" href={`/${selectedLores.join("")}`}>
        Save
      </a>
    </div>
  );
}

export default App;
