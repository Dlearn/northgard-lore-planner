import React from "react";

import SelectedIcon from "../SelectedIcon";

import descriptionsBlessings from "../../descriptions/blessings.json";

import iconResolver from "../../utils/iconResolver";

import "../../App.css";

function Blessing(props) {
  const {
    coordinatesRowCol,
    enabled,
    onDeselectLore,
    onSelectLore,
    positionInLores,
    selectedLores,
    title,
  } = props;

  const selected = positionInLores !== -1;
  const disabled = selected
    ? positionInLores + 1 !== selectedLores.length
    : !enabled;

  const onClickLore = () => {
    if (positionInLores !== -1) {
      onDeselectLore();
    } else {
      onSelectLore(coordinatesRowCol);
    }
  };

  let backgroundTitleClassName;
  if (selected) {
    backgroundTitleClassName = "background-title blessing selected";
  } else if (enabled) {
    backgroundTitleClassName = "background-title blessing enabled";
  } else {
    backgroundTitleClassName = "background-title blessing";
  }
  return (
    <div style={{ position: "relative" }}>
      <button className="lore" disabled={disabled} onClick={onClickLore}>
        <div
          className={
            enabled || selected
              ? "background-icon-blessing selected"
              : "background-icon-blessing"
          }
        >
          <img alt={title} className="iconBlessing" src={iconResolver(title)} />
        </div>
        <div className={backgroundTitleClassName}>
          <span className="title">{title}</span>
        </div>
        {selected && <SelectedIcon number={positionInLores + 1} />}
      </button>
      <p className="description">{descriptionsBlessings[title]}</p>
    </div>
  );
}

export default Blessing;
