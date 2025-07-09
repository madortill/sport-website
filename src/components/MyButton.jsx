import React from "react";
import "../style/Button.css";

const images = import.meta.glob("/src/assets/images/logos/*-logo.svg", {
  eager: true,
  import: "default",
});

function MyButton({ text, icon, page, onClick, type}) {
  const imgSrc = images[`/src/assets/images/logos/${icon}-logo.svg`];

  // if (!imgSrc) return null;

  return (
    <button className={`${type}-button ${page}-btn`} onClick={onClick}>
      <img src={imgSrc} alt={text} className={`icon-img-${type}`} />
      {text}
    </button>
  );
}

export default MyButton;
