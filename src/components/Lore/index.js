import React from "react";

import iconResolver from "../../utils/iconResolver";

import styles from "./styles.module.css";

function Lore(props) {
  const { classNameBackgroundTitle, classNameTitle, title } = props;

  return (
    <>
      <div className={styles.backgroundIconLore}>
        <img alt={title} src={iconResolver(title)} />
      </div>
      <div className={classNameBackgroundTitle}>
        <span className={classNameTitle}>{title}</span>
      </div>
    </>
  );
}

export default Lore;
