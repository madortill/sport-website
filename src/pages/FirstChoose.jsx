import React from "react";
import { useLocation } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";
import "../style/Choose.css";
import buttonData from "../data/buttonData.json";
import MyButton from "../components/MyButton";

import arrow from "../assets/images/arrow.svg";

function FirstChoose() {
  const location = useLocation();
  const btnPressed = location.state;
  const buttons = buttonData[`${btnPressed.id}Buttons1`];
  const navigate = useNavigate();

  const backButton = () => {
    navigate("/stadium");
  };

  const handleClick = (btn) => {
    if (btn.isLastButton === 'true') {
      navigate("/main-text", {
        state: {
          prevCategory: btnPressed,
          selectedButton: btn,
        },
      });
    } else {
      navigate("/second-choose", {
        state: {
          prevCategory: btnPressed,
          selectedButton: btn,
        },
      });
    }
  };

  if (!btnPressed || !btnPressed.id) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="firstChoose">
      <button className="back-btn" onClick={backButton}>
        <img src={arrow} alt="back-arrow" />
      </button>
      <h1 className="title-first">{btnPressed.text}</h1>
      <div className="firstButtons">
        {buttons.map((btn, i) => (
          <MyButton
            key={i}
            id={btn.id}
            text={btn.text}
            icon={btn.id}
            page="choose1"
            type="round"
            onClick={() => handleClick(btn)}
          />
        ))}
      </div>
    </div>
  );
}

export default FirstChoose;
