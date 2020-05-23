import React from "react";

import Lore from "../Lore";

import iconResolver from "../../utils/iconResolver";

import "../../App.css";

function LoreRow(props) {
  const { loreRow, onDeselectLore, onSelectLore, row, selectedLores } = props;

  const position0 = selectedLores.indexOf(`${row}0`);
  const isCol0Selected = position0 !== -1;
  const position1 = selectedLores.indexOf(`${row}1`);
  const position2 = selectedLores.indexOf(`${row + 1}1`);
  const isCol1Selected = position1 !== -1 || position2 !== -1;
  const position3 = selectedLores.indexOf(`${row}2`);
  const position4 = selectedLores.indexOf(`${row + 1}2`);
  const isCol2Selected = position3 !== -1 || position4 !== -1;
  const position5 = selectedLores.indexOf(`${row}3`);
  const position6 = selectedLores.indexOf(`${row + 1}3`);

  return (
    <div style={{ display: "flex" }}>
      <div className="background background-root">
        <Lore
          coordinatesRowCol={[row, 0]}
          enabled // Enabled by default
          onDeselectLore={onDeselectLore}
          onSelectLore={onSelectLore}
          positionInLores={position0}
          selectedLores={selectedLores}
          src={iconResolver(loreRow[0])}
          title={loreRow[0]}
        />
      </div>
      <div className="background background-branch">
        <Lore
          coordinatesRowCol={[row, 1]}
          enabled={isCol0Selected}
          onDeselectLore={onDeselectLore}
          onSelectLore={onSelectLore}
          positionInLores={position1}
          selectedLores={selectedLores}
          src={iconResolver(loreRow[1])}
          title={loreRow[1]}
        />
        <Lore
          coordinatesRowCol={[row + 1, 1]}
          enabled={isCol0Selected}
          onDeselectLore={onDeselectLore}
          onSelectLore={onSelectLore}
          positionInLores={position2}
          selectedLores={selectedLores}
          src={iconResolver(loreRow[2])}
          title={loreRow[2]}
        />
      </div>
      <div className="background background-branch">
        <Lore
          coordinatesRowCol={[row, 2]}
          enabled={isCol1Selected}
          onDeselectLore={onDeselectLore}
          onSelectLore={onSelectLore}
          positionInLores={position3}
          selectedLores={selectedLores}
          src={iconResolver(loreRow[3])}
          title={loreRow[3]}
        />
        <Lore
          coordinatesRowCol={[row + 1, 2]}
          enabled={isCol1Selected}
          onDeselectLore={onDeselectLore}
          onSelectLore={onSelectLore}
          positionInLores={position4}
          selectedLores={selectedLores}
          src={iconResolver(loreRow[4])}
          title={loreRow[4]}
        />
      </div>
      <div className="background background-leaf">
        <Lore
          coordinatesRowCol={[row, 3]}
          enabled={isCol2Selected}
          onDeselectLore={onDeselectLore}
          onSelectLore={onSelectLore}
          positionInLores={position5}
          selectedLores={selectedLores}
          src={iconResolver(loreRow[5])}
          title={loreRow[5]}
        />
        <Lore
          coordinatesRowCol={[row + 1, 3]}
          enabled={isCol2Selected}
          onDeselectLore={onDeselectLore}
          onSelectLore={onSelectLore}
          positionInLores={position6}
          selectedLores={selectedLores}
          src={iconResolver(loreRow[6])}
          title={loreRow[6]}
        />
      </div>
    </div>
  );
}

export default LoreRow;
