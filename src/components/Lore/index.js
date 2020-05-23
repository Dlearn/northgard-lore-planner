import React from "react";

import SelectedIcon from "../SelectedIcon";

import countLoresInRow from "../../utils/countLoresInRow";

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
  const isUpperRow = row % 2 === 0;
  const selected = isUpperRow ? count > col : count >= col;
  const isLastSelected = isUpperRow
    ? selectedLores[selectedLores.length - 1] === row && count === col + 1
    : selectedLores[selectedLores.length - 1] === row && count === col;

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
      {selected && <SelectedIcon number={1} />}
    </button>
  );
}

export default Lore;
