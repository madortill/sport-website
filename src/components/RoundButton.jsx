import React from "react";
import "../style/Button.css";
import roundButtonData from "../data/roundButtonData.json";

function RoundButton({groupName}) {
  const buttons = roundButtonData[groupName];
  if (!Array.isArray(buttons)) {
    return <p>לא נמצאו כפתורים עבור הקבוצה "{groupName}"</p>;
  }

  const handleClick = () => {
      
  }


  return (
    <div className="roundButtons">
      {buttons.map((btn, i) => (
        <button onClick={handleClick} key={i} className={`info-button info-button-${btn.icon}`}>
          <img
            src={`/src/assets/images/logos/${btn.icon}-logo.svg`}
            alt={btn.text}
            className="icon-img"
          />
          {btn.text}
        </button>
      ))}
    </div>
  );
}

export default RoundButton;
