import React from "react";

import styles from "./styles.module.css";

function SelectedIcon({ number }) {
  return (
    <div className={styles.selectedIcon}>
      <h1 className={styles.selectedText}>{number}</h1>
    </div>
  );
}

export default SelectedIcon;
