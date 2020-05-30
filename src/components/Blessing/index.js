import React from "react";

import iconResolver from "../../utils/iconResolver";

import styles from "./styles.module.css";

function Blessing(props) {
  const {
    classNameBackgroundTitle,
    classNameTitle,
    enabled,
    selected,
    title,
  } = props;

  return (
    <>
      <div
        className={
          enabled || selected
            ? `${styles.backgroundIconBlessing} ${styles.selected}`
            : styles.backgroundIconBlessing
        }
      >
        <img
          alt={title}
          className={styles.iconBlessing}
          src={iconResolver(title)}
        />
      </div>
      <div className={classNameBackgroundTitle}>
        <span className={classNameTitle}>{title}</span>
      </div>
    </>
  );
}

export default Blessing;
