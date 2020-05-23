import React from "react";

import Lore from "../Lore";

import iconResolver from "../../utils/iconResolver";

import "../../App.css";

function LoreRow(props) {
  const { loreRow, onDeselectLore, onSelectLore, row, selectedLores } = props;

  return (
    <div style={{ display: "flex" }}>
      <div className="background background-root">
        <Lore
          coordinatesRowCol={[row, 0]}
          onDeselectLore={onDeselectLore}
          onSelectLore={onSelectLore}
          selectedLores={selectedLores}
          src={iconResolver(loreRow[0])}
          title={loreRow[0]}
        />
      </div>
      <div className="background background-branch">
        <Lore
          coordinatesRowCol={[row, 1]}
          onDeselectLore={onDeselectLore}
          onSelectLore={onSelectLore}
          selectedLores={selectedLores}
          src={iconResolver(loreRow[1])}
          title={loreRow[1]}
        />
        <Lore
          coordinatesRowCol={[row + 1, 1]}
          onDeselectLore={onDeselectLore}
          onSelectLore={onSelectLore}
          selectedLores={selectedLores}
          src={iconResolver(loreRow[2])}
          title={loreRow[2]}
        />
      </div>
      <div className="background background-branch">
        <Lore
          coordinatesRowCol={[row, 2]}
          onDeselectLore={onDeselectLore}
          onSelectLore={onSelectLore}
          selectedLores={selectedLores}
          src={iconResolver(loreRow[3])}
          title={loreRow[3]}
        />
        <Lore
          coordinatesRowCol={[row + 1, 2]}
          onDeselectLore={onDeselectLore}
          onSelectLore={onSelectLore}
          selectedLores={selectedLores}
          src={iconResolver(loreRow[4])}
          title={loreRow[4]}
        />
      </div>
      <div className="background background-leaf">
        <Lore
          coordinatesRowCol={[row, 3]}
          onDeselectLore={onDeselectLore}
          onSelectLore={onSelectLore}
          selectedLores={selectedLores}
          src={iconResolver(loreRow[5])}
          title={loreRow[5]}
        />
        <Lore
          coordinatesRowCol={[row + 1, 3]}
          onDeselectLore={onDeselectLore}
          onSelectLore={onSelectLore}
          selectedLores={selectedLores}
          src={iconResolver(loreRow[6])}
          title={loreRow[6]}
        />
      </div>
    </div>
  );
}

export default LoreRow;
