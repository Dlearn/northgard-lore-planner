import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  useParams,
} from "react-router-dom";

import BlessingRow from "./components/BlessingRow";
import LoreRow from "./components/LoreRow";

import loreCommon from "./clans/0320-common";
import loreStag from "./clans/0320-stag";
import loreGoat from "./clans/0320-goat";
import loreWolf from "./clans/0320-wolf";
import loreRaven from "./clans/0320-raven";
import loreBear from "./clans/0320-bear";
import loreBoar from "./clans/0320-boar";
import loreSnake from "./clans/0320-snake";
import loreDragon from "./clans/0320-dragon";
import loreHorse from "./clans/0320-horse";
import loreKraken from "./clans/0320-kraken";
import loreOx from "./clans/0320-ox";

import iconLore from "./images/icon-lore.png";
import "./App.css";

const CLANS = {
  Common: loreCommon,
  Stag: loreStag,
  Goat: loreGoat,
  Wolf: loreWolf,
  Raven: loreRaven,
  Bear: loreBear,
  Boar: loreBoar,
  Snake: loreSnake,
  Dragon: loreDragon,
  Horse: loreHorse,
  Kraken: loreKraken,
  Ox: loreOx,
};

function RouterWrapper() {
  return (
    <Router>
      <div className="body">
        <h1>
          <img alt="Icon lore" className="iconLore" src={iconLore} />
          Northgard Lore Planner
        </h1>
        <Switch>
          {/* <Route exact path="/"><Redirect to=""/></Route> */}
          <Route exact path={["", "/:hash"]}>
            <App />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function App() {
  const { hash = "" } = useParams();
  const [selectedClan, setSelectedClan] = useState("Stag");
  const [selectedLores, setSelectedLores] = useState([]);

  // Initialize lore build from url
  useEffect(() => {
    const lores = hash.match(/.{1,2}/g);
    if (lores) {
      setSelectedLores(lores);
    } else {
      setSelectedLores([]);
    }
  }, [hash]);

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
    <>
      <select
        onChange={(e) => {
          setSelectedClan(e.currentTarget.value);
        }}
        value={selectedClan}
      >
        {Object.keys(CLANS).map((clan) => (
          <option key={clan} value={clan}>
            {clan}
          </option>
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
      <BlessingRow
        onDeselectLore={onDeselectLore}
        onSelectLore={onSelectLore}
        selectedLores={selectedLores}
      />
      <div style={{ display: "flex" }}>
        <Link className="button" to={`/${selectedLores.join("")}`}>
          Save
        </Link>
        <button
          className="button"
          onClick={() => {
            setSelectedLores([]);
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
}

export default RouterWrapper;
