import React from "react";
import { useLocation } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";
import buttonData from "../data/buttonData.json";
import MyButton from "../components/MyButton";
import "../style/Choose.css";

import arrow from "../assets/images/arrow.svg";

function SecondChoose() {
  const location = useLocation();
  const navigate = useNavigate();
  const btnPressed = location.state;

  const { prevCategory, selectedButton } = location.state || {};
  
  if (!selectedButton || !selectedButton.id) {
    return <Navigate to="/first-choose" replace />;
  }

  const buttons = buttonData[`${selectedButton.id}Buttons2`];

  const backButton = () => {
    navigate("/first-choose", { state: prevCategory });
  };

  const handleClick = (btn) => {
    navigate("/main-text", {
      state: {
        prevCategory: btnPressed,
        selectedButton: btn,
      },
    });
  };

  return (
    <div className="secondChoose">
      <button className="back-btn" onClick={backButton}>
        <img src={arrow} alt="back-arrow" />
      </button>
      <h1 className="title-first">{selectedButton.text}</h1>
      <div className="secondButtons">
        {buttons.map((btn, i) => (
          <MyButton
            key={i}
            id={btn.id}
            text={btn.text}
            icon={selectedButton.id}
            page="choose2"
            type="square"
            onClick={() => handleClick(btn)}
          />
        ))}
      </div>
    </div>
  );
}

export default SecondChoose;
