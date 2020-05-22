import React from "react";
import "../../App.css";

function Lore({ alt, src, title }) {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div className="background-icon">
        <img alt={alt} src={src} />
      </div>
      <div className="background-title">
        <span className="title">{title}</span>
      </div>
    </div>
  );
}

export default Lore;
