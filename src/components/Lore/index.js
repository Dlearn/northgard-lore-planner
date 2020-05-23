import React, { useState } from "react";

import SelectedIcon from "../SelectedIcon";

import "../../App.css";

function Lore({ alt, src, title }) {
  const [selected, setSelected] = useState(false);

  const onClickLore = () => {
    setSelected(!selected);
  };

  return (
    <button className="lore" onClick={onClickLore}>
      <div className="background-icon">
        <img alt={alt} src={src} />
      </div>
      <div className="background-title">
        <span className="title">{title}</span>
      </div>
      {selected && <SelectedIcon number={1} />}
    </button>
  );
}

export default Lore;
