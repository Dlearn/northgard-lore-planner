import React from "react";

import Blessing from "../Blessing";
import Lore from "../Lore";
import SelectedIcon from "../SelectedIcon";

import descriptionsBlessings from "../../descriptions/blessings.json";
import descriptionsLores from "../../descriptions/lores.json";

import styles from "./styles.module.css";

function Selectable(props) {
  const {
    coordinatesRowCol,
    enabled,
    isLore,
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

  let classNameBackgroundTitle;
  if (isLore) {
    classNameBackgroundTitle = styles.backgroundTitle;
  } else if (selected) {
    classNameBackgroundTitle = `${styles.backgroundTitle} ${styles.blessing} ${styles.selected}`;
  } else if (enabled) {
    classNameBackgroundTitle = `${styles.backgroundTitle} ${styles.blessing} ${styles.enabled}`;
  } else {
    classNameBackgroundTitle = `${styles.backgroundTitle} ${styles.blessing}`;
  }
  const description = isLore
    ? descriptionsLores[title]
    : descriptionsBlessings[title];

  return (
    <div style={{ position: "relative" }}>
      <button
        className={styles.selectable}
        disabled={disabled}
        onClick={onClickLore}
      >
        {isLore ? (
          <Lore
            classNameBackgroundTitle={classNameBackgroundTitle}
            classNameTitle={styles.title}
            title={title}
          />
        ) : (
          <Blessing
            classNameBackgroundTitle={classNameBackgroundTitle}
            classNameTitle={
              selected ? `${styles.title} ${styles.selected}` : styles.title
            }
            enabled={enabled}
            selected={selected}
            title={title}
          />
        )}
        {selected && <SelectedIcon number={positionInLores + 1} />}
      </button>
      <p>{description}</p>
    </div>
  );
}

export default Selectable;
