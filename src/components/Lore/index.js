import React from "react";

import SelectedIcon from "../SelectedIcon";

import checkUnselectedIsDisabled from "../../utils/checkUnselectedIsDisabled";
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

  const row = coordinatesRowCol[0];
  const position = getPositionInSelectedLores(selectedLores, coordinatesRowCol);
  const selected = position !== -1;
  const isLastSelected = position === selectedLores.length;

  const disabled = selected
    ? !isLastSelected
    : checkUnselectedIsDisabled(selectedLores, coordinatesRowCol);

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
