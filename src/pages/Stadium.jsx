import React from "react";
import "../style/Stadium.css";
import MyButton from "../components/MyButton";
import buttonData from "../data/buttonData.json";

import { useNavigate } from "react-router-dom";

import stadiumImg from "../assets/images/stadium-img.svg";

function Stadium() {
  const buttons = buttonData["stadiumButtons"];
  const navigate = useNavigate();

  const handleClick = (btn) => {
    if (btn.id === "contact-us") {
      navigate("/main-text", {
        state: {
          prevCategory: btn,
          selectedButton: btn,
        },
      });
    } else {
      navigate("/first-choose", { state: btn });
    }
  }

  return (
    <div className="stadium">
      <img src={stadiumImg} alt="stadium" className="stadium-img" />
      <div className="roundButtons">
        {buttons.map((btn, i) => (
          <MyButton key={i} id={btn.id} text={btn.text} type="round" icon={btn.id} page="stadium" onClick={() => handleClick(btn)}/>
        ))}
      </div>
    </div>
  );
}

export default Stadium;
