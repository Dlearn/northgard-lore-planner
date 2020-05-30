import React from "react";

import Selectable from "../Selectable";

import styles from "./styles.module.css";

function BlessingRow(props) {
  const { isDesktop, onDeselectLore, onSelectLore, selectedLores } = props;

  const countSelectedLores = selectedLores.filter((selectedLore) => {
    return selectedLore.charAt(0) !== "6";
  }).length;
  const countSelectedBlessings = selectedLores.length - countSelectedLores;
  let countAllowedBlessings;
  if (countSelectedLores >= 12) {
    countAllowedBlessings = 3;
  } else if (countSelectedLores >= 9) {
    countAllowedBlessings = 2;
  } else if (countSelectedLores >= 6) {
    countAllowedBlessings = 1;
  } else {
    countAllowedBlessings = 0;
  }
  const position0 = selectedLores.indexOf("60");
  const position1 = selectedLores.indexOf("61");
  const position2 = selectedLores.indexOf("62");

  console.log({ isDesktop });
  return (
    <div
      className={
        isDesktop ? styles.blessingRowDesktop : styles.blessingRowMobile
      }
    >
      <Selectable
        coordinatesRowCol={[6, 0]}
        enabled={countAllowedBlessings - countSelectedBlessings > 0}
        onDeselectLore={onDeselectLore}
        onSelectLore={onSelectLore}
        positionInLores={position0}
        selectedLores={selectedLores}
        title="Freya's Blessing"
      />
      <Selectable
        coordinatesRowCol={[6, 1]}
        enabled={countAllowedBlessings - countSelectedBlessings > 0}
        onDeselectLore={onDeselectLore}
        onSelectLore={onSelectLore}
        positionInLores={position1}
        selectedLores={selectedLores}
        title="Baldr's Blessing"
      />
      <Selectable
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
