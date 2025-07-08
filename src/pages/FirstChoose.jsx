import React from "react";
import { useLocation } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";
import "../style/First.css";
import buttonData from "../data/buttonData.json";
import RoundButton from "../components/RoundButton";

import arrow from "../assets/images/arrow.svg";

function FirstChoose() {
  const location = useLocation();
  const btnPressed = location.state;
  const buttons = buttonData[`${btnPressed.id}Buttons`];
  const navigate = useNavigate();

  const backButton = () => {
    navigate("/stadium");
  };

  return (
    <div className="firstChoose">
      <button className="back-btn">
        <img src={arrow} alt="back-arrow" onClick={backButton} />
      </button>
      <h1 className="title-first">{btnPressed.text}</h1>
      <div className="firstButtons">
        {buttons.map((btn, i) => (
          <RoundButton
            key={i}
            id={btn.id}
            text={btn.text}
            icon={btn.id}
            page="choose"
            onClick={() => handleClick(btn)}
          />
        ))}
      </div>
    </div>
  );
}

export default FirstChoose;
