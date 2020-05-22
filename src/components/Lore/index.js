import React from "react";
import "../../App.css";

function Lore({ alt, src, title }) {
  return (
    <button className="lore">
      <div className="background-icon">
        <img alt={alt} src={src} />
      </div>
      <div className="background-title">
        <span className="title">{title}</span>
      </div>
    </button>
  );
}

export default Lore;
