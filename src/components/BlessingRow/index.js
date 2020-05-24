import React from "react";

import Blessing from "../Blessing";

import "../../App.css";

function BlessingRow(props) {
  const { onDeselectLore, onSelectLore, selectedLores } = props;

  const countSelectedLores = selectedLores.filter((selectedLore) => {
    return selectedLore.charAt(0) !== "6";
  }).length;
  const countSelectedBlessings = selectedLores.length - countSelectedLores;
  const countAllowedBlessings = Math.floor(countSelectedLores / 6);
  const position0 = selectedLores.indexOf("60");
  const position1 = selectedLores.indexOf("61");
  const position2 = selectedLores.indexOf("62");

  return (
    <div className="blessingRow">
      <Blessing
        coordinatesRowCol={[6, 0]}
        enabled={countAllowedBlessings - countSelectedBlessings > 0}
        onDeselectLore={onDeselectLore}
        onSelectLore={onSelectLore}
        positionInLores={position0}
        selectedLores={selectedLores}
        title="Freya's Blessing"
      />
      <Blessing
        coordinatesRowCol={[6, 1]}
        enabled={countAllowedBlessings - countSelectedBlessings > 0}
        onDeselectLore={onDeselectLore}
        onSelectLore={onSelectLore}
        positionInLores={position1}
        selectedLores={selectedLores}
        title="Baldr's Blessing"
      />
      <Blessing
        coordinatesRowCol={[6, 2]}
        enabled={countAllowedBlessings - countSelectedBlessings > 0}
        onDeselectLore={onDeselectLore}
        onSelectLore={onSelectLore}
        positionInLores={position2}
        selectedLores={selectedLores}
        title="Jord's Blessing"
      />
    </div>
  );
}

export default BlessingRow;
