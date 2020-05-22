import React from "react";

import Lore from "./components/Lore";

import iconLore from "./images/icon-lore.png";
import iconCarpentryMastery from "./images/icon-common/carpentry-mastery.png";
import iconCoinage from "./images/icon-common/coinage.png";
import iconColonization from "./images/icon-common/colonization.png";
import iconDefensiveStrategy from "./images/icon-common/defensive-strategy.png";
import iconEradication from "./images/icon-common/eradication.png";
import iconErudition from "./images/icon-common/erudition.png";
import iconFeelingSafe from "./images/icon-common/feeling-safe.png";
import iconFurCoats from "./images/icon-common/fur-coats.png";
import iconHearthstone from "./images/icon-common/hearthstone.png";
import iconLegendaryHeroes from "./images/icon-common/legendary-heroes.png";
import iconMedicine from "./images/icon-common/medicine.png";
import iconMilitaryStrategy from "./images/icon-common/military-strategy.png";
import iconMiningEfficiency from "./images/icon-common/mining-efficiency.png";
import iconMonsterSlayer from "./images/icon-common/monster-slayer.png";
import iconNegotiation from "./images/icon-common/negotiation.png";
import iconRecruitment from "./images/icon-common/recruitment.png";
import iconSharpAxes from "./images/icon-common/sharp-axes.png";
import iconShinyHappyPeople from "./images/icon-common/shiny-happy-people.png";
import iconShipbuilding from "./images/icon-common/shipbuilding.png";
import iconTradingCaravan from "./images/icon-common/trading-caravan.png";
import iconWeaponsmith from "./images/icon-common/weaponsmith.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Northgard Lore Planner</h1>
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
              alt="Colonization icon"
              src={iconColonization}
              title="Colonization"
            />
            <Lore
              alt="Eradication icon"
              src={iconEradication}
              title="Eradication"
            />
          </div>
          <div className="background background-branch">
            <Lore
              alt="Recruitment icon"
              src={iconRecruitment}
              title="Recruitment"
            />
            <Lore alt="Medicine icon" src={iconMedicine} title="Medicine" />
          </div>
          <div className="background background-leaf">
            <Lore
              alt="Hearthstone icon"
              src={iconHearthstone}
              title="Hearthstone"
            />
            <Lore
              alt="Shiny happy people icon"
              src={iconShinyHappyPeople}
              title="Shiny Happy People"
            />
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div className="background background-root">
            <Lore
              alt="Weaponsmith icon"
              src={iconWeaponsmith}
              title="Weaponsmith"
            />
          </div>
          <div className="background background-branch">
            <Lore alt="Fur coats icon" src={iconFurCoats} title="Fur Coats" />
            <Lore
              alt="Defensive strategy icon"
              src={iconDefensiveStrategy}
              title="Defensive Strategy"
            />
          </div>
          <div className="background background-branch">
            <Lore
              alt="Military strategy icon"
              src={iconMilitaryStrategy}
              title="Military Strategy "
            />
            <Lore
              alt="Feeling safe icon"
              src={iconFeelingSafe}
              title="Feeling Safe"
            />
          </div>
          <div className="background background-leaf">
            <Lore
              alt="Legendary heroes icon"
              src={iconLegendaryHeroes}
              title="Legendary Heroes"
            />
            <Lore
              alt="Monster slayer icon"
              src={iconMonsterSlayer}
              title="Monster Slayer "
            />
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div className="background background-root">
            <Lore
              alt="Mining efficiency icon"
              src={iconMiningEfficiency}
              title="Mining Efficiency"
            />
          </div>
          <div className="background background-branch">
            <Lore
              alt="Shipbuilding icon"
              src={iconShipbuilding}
              title="Shipbuilding"
            />
            <Lore alt="Coinage icon" src={iconCoinage} title="Coinage" />
          </div>
          <div className="background background-branch">
            <Lore alt="Erudition icon" src={iconErudition} title="Erudition" />
            <Lore
              alt="Carpentry mastery icon"
              src={iconCarpentryMastery}
              title="Carpentry Mastery"
            />
          </div>
          <div className="background background-leaf">
            <Lore
              alt="Negotiation icon"
              src={iconNegotiation}
              title="Negotiation"
            />
            <Lore
              alt="Trading caravan icon"
              src={iconTradingCaravan}
              title="Trading Caravan"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
