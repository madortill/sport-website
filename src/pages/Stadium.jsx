import React from "react";
import "../style/Stadium.css";
import RoundButton from "../components/RoundButton";
import roundButtonData from "../data/roundButtonData.json";

import stadiumImg from "../assets/images/stadium-img.svg";

function Stadium() {
  const buttons = roundButtonData["stadiumButtons"];

  if (!Array.isArray(buttons)) {
    return <p>⚠ לא נמצאו כפתורים עבור הקבוצה "{groupName}"</p>;
  }

  return (
    <div className="stadium">
      <img src={stadiumImg} alt="stadium" className="stadium-img" />
      <div className="roundButtons">
        {buttons.map((btn, i) => (
          <RoundButton key={i} text={btn.text} icon={btn.icon} className={`info-button-${btn.icon}`}/>
        ))}
      </div>
    </div>
  );
}

export default Stadium;
