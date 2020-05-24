import React, { useEffect, useState } from "react";

import LoreRow from "./components/LoreRow";

import loreCommon from "./clans/0320-common";
import loreStag from "./clans/0320-stag";
import loreGoat from "./clans/0320-goat";

import iconLore from "./images/icon-lore.png";
import "./App.css";

const CLANS = {
  Common: loreCommon,
  Stag: loreStag,
  Goat: loreGoat,
};

function App() {
  const [selectedClan, setSelectedClan] = useState("Stag");
  const [selectedLores, setSelectedLores] = useState([]);

  // Initialize lore build from url
  useEffect(() => {
    const cleanedPathname = window.location.pathname.substr(1);
    const lores = cleanedPathname.match(/.{1,2}/g);
    if (lores) {
      setSelectedLores(lores);
    } else {
      setSelectedLores([]);
    }
  }, []);

  const lore = CLANS[selectedClan];

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
      <select
        onChange={(e) => {
          setSelectedClan(e.currentTarget.value);
        }}
        value={selectedClan}
      >
        {Object.keys(CLANS).map((clan) => (
          <option value={clan}>{clan}</option>
        ))}
      </select>
      <div>
        <LoreRow
          loreRow={lore[0]}
          onDeselectLore={onDeselectLore}
          onSelectLore={onSelectLore}
          row={0}
          selectedLores={selectedLores}
        />
        <LoreRow
          loreRow={lore[1]}
          onDeselectLore={onDeselectLore}
          onSelectLore={onSelectLore}
          row={2}
          selectedLores={selectedLores}
        />
        <LoreRow
          loreRow={lore[2]}
          onDeselectLore={onDeselectLore}
          onSelectLore={onSelectLore}
          row={4}
          selectedLores={selectedLores}
        />
      </div>
      <div style={{ display: "flex" }}>
        <a className="button" href={`/${selectedLores.join("")}`}>
          Save
        </a>
        <button
          className="button"
          onClick={() => {
            setSelectedLores([]);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
