import React from "react";

import Selectable from "../Selectable";

import styles from "./styles.module.css";

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
      <div className={`${styles.backgroundPanel} ${styles.backgroundRoot}`}>
        <Selectable
          coordinatesRowCol={[row, 0]}
          enabled // Enabled by default
          isLore
          onDeselectLore={onDeselectLore}
          onSelectLore={onSelectLore}
          positionInLores={position0}
          selectedLores={selectedLores}
          title={loreRow[0]}
        />
      </div>
      <div className={`${styles.backgroundPanel} ${styles.backgroundBranch}`}>
        <Selectable
          coordinatesRowCol={[row, 1]}
          enabled={isCol0Selected}
          isLore
          onDeselectLore={onDeselectLore}
          onSelectLore={onSelectLore}
          positionInLores={position1}
          selectedLores={selectedLores}
          title={loreRow[1]}
        />
        <Selectable
          coordinatesRowCol={[row + 1, 1]}
          enabled={isCol0Selected}
          isLore
          onDeselectLore={onDeselectLore}
          onSelectLore={onSelectLore}
          positionInLores={position2}
          selectedLores={selectedLores}
          title={loreRow[2]}
        />
      </div>
      <div className={`${styles.backgroundPanel} ${styles.backgroundBranch}`}>
        <Selectable
          coordinatesRowCol={[row, 2]}
          enabled={isCol1Selected}
          isLore
          onDeselectLore={onDeselectLore}
          onSelectLore={onSelectLore}
          positionInLores={position3}
          selectedLores={selectedLores}
          title={loreRow[3]}
        />
        <Selectable
          coordinatesRowCol={[row + 1, 2]}
          enabled={isCol1Selected}
          isLore
          onDeselectLore={onDeselectLore}
          onSelectLore={onSelectLore}
          positionInLores={position4}
          selectedLores={selectedLores}
          title={loreRow[4]}
        />
      </div>
      <div className={`${styles.backgroundPanel} ${styles.backgroundLeaf}`}>
        <Selectable
          coordinatesRowCol={[row, 3]}
          enabled={isCol2Selected}
          isLore
          onDeselectLore={onDeselectLore}
          onSelectLore={onSelectLore}
          positionInLores={position5}
          selectedLores={selectedLores}
          title={loreRow[5]}
        />
        <Selectable
          coordinatesRowCol={[row + 1, 3]}
          enabled={isCol2Selected}
          isLore
          onDeselectLore={onDeselectLore}
          onSelectLore={onSelectLore}
          positionInLores={position6}
          selectedLores={selectedLores}
          title={loreRow[6]}
        />
      </div>
    </div>
  );
}

export default LoreRow;
