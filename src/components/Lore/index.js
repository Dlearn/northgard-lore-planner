import React from "react";

import SelectedIcon from "../SelectedIcon";

import countLoresInRow from "../../utils/countLoresInRow";
import getPositionInSelectedLores from "../../utils/getPositionInSelectedLores";

import "../../App.css";

function Lore(props) {
  const {
    coordinatesRowCol,
    onDeselectLore,
    onSelectLore,
    selectedLores,
    src,
    title,
  } = props;

  const [row, col] = coordinatesRowCol;
  const count = countLoresInRow(selectedLores, row);
  const position = getPositionInSelectedLores(selectedLores, coordinatesRowCol);
  const isUpperRow = row % 2 === 0;
  const selected = position !== -1;
  const isLastSelected = position === selectedLores.length;

  const disabled = selected
    ? !isLastSelected
    : isUpperRow
    ? col > count
    : col > count + 1;

  const onClickLore = () => {
    if (selected) {
      onDeselectLore(row);
    } else {
      onSelectLore(row);
    }
  };

  return (
    <button className="lore" disabled={disabled} onClick={onClickLore}>
      <div className="background-icon">
        <img alt={title} src={src} />
      </div>
      <div className="background-title">
        <span className="title">{title}</span>
      </div>
      {selected && <SelectedIcon number={position} />}
    </button>
  );
}

export default Lore;
