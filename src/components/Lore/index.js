import React, { useState } from "react";

import svgSelected from "../../images/selected.svg";

import "../../App.css";

function Lore({ alt, src, title }) {
  const [selected, setSelected] = useState(false);
  return (
    <button
      className="lore"
      onClick={() => {
        setSelected(!selected);
      }}
    >
      <div className="background-icon">
        <img alt={alt} src={src} />
      </div>
      <div className="background-title">
        <span className="title">{title}</span>
      </div>
      {selected && (
        <img alt="Selected" className="svgSelected" src={svgSelected} />
      )}
    </button>
  );
}

export default Lore;
