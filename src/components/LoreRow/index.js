import React from "react";

import iconResolver from "../../utils/iconResolver";
import Lore from "../Lore";

import "../../App.css";

function LoreRow({ loreRow }) {
  return (
    <div style={{ display: "flex" }}>
      <div className="background background-root">
        <Lore
          alt={loreRow[0]}
          src={iconResolver(loreRow[0])}
          title={loreRow[0]}
        />
      </div>
      <div className="background background-branch">
        <Lore
          alt={loreRow[1]}
          src={iconResolver(loreRow[1])}
          title={loreRow[1]}
        />
        <Lore
          alt={loreRow[2]}
          src={iconResolver(loreRow[2])}
          title={loreRow[2]}
        />
      </div>
      <div className="background background-branch">
        <Lore
          alt={loreRow[3]}
          src={iconResolver(loreRow[3])}
          title={loreRow[3]}
        />
        <Lore
          alt={loreRow[4]}
          src={iconResolver(loreRow[4])}
          title={loreRow[4]}
        />
      </div>
      <div className="background background-leaf">
        <Lore
          alt={loreRow[5]}
          src={iconResolver(loreRow[5])}
          title={loreRow[5]}
        />
        <Lore
          alt={loreRow[6]}
          src={iconResolver(loreRow[6])}
          title={loreRow[6]}
        />
      </div>
    </div>
  );
}

export default LoreRow;
