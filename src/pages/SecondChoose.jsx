import React from 'react'
import { useLocation } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";
import buttonData from "../data/buttonData.json";
import MyButton from "../components/MyButton";
import "../style/Choose.css";

import arrow from "../assets/images/arrow.svg";

function SecondChoose() {
    const location = useLocation();
    const btnPressed = location.state;
    const buttons = buttonData[`${btnPressed.id}Buttons2`];
    const navigate = useNavigate();

    const backButton = () => {
        // navigate("/stadium");
        console.log("back");
      };
    
    
  return (
    <div className="secondChoose">
      <button className="back-btn">
        <img src={arrow} alt="back-arrow" onClick={backButton} />
      </button>
      <h1 className="title-first">{btnPressed.text}</h1>
      <div className="secondButtons">
        {buttons.map((btn, i) => (
          <MyButton
            key={i}
            id={btn.id}
            text={btn.text}
            icon={btnPressed.id}
            page="choose2"
            type="square"
            onClick={() => handleClick(btn)}
          />
        ))}
      </div>
    </div>
  )
}

export default SecondChoose
