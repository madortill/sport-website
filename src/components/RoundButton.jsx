import React from "react";
import "../style/Button.css";

const images = import.meta.glob("/src/assets/images/logos/*-logo.svg", {
  eager: true,
  import: "default",
});

function RoundButton({ text, icon, page }) {
  const imgSrc = images[`/src/assets/images/logos/${icon}-logo.svg`];

  if (!imgSrc) return null;

  return (
    <button className={`info-button ${page}-btn`}>
      <img
        src={imgSrc}
        alt={text}
        className="icon-img"
      />
      {text}
    </button>
  );
}

export default RoundButton;
