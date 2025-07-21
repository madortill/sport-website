import React from "react";
import "../style/MainText.css";
import textData from "../data/textData.json";
import { useLocation } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";

import arrow from "../assets/images/arrow.svg";
import TrainingText from "../components/TrainingText";
import RegularText from "../components/RegularText";

function MainText() {
  const location = useLocation();
  const navigate = useNavigate();

  const { prevCategory, selectedButton, index } = location.state || {};

  if (!selectedButton || !selectedButton.id) {
    return <Navigate to="/second-choose" replace />;
  }

  let isExercise = false;

  if (selectedButton.group === "exercise") {
    isExercise = true;
  }
  const text = textData[`${selectedButton.id}Text`];

  const backButton = () => {
    if (prevCategory.id === "contactUs") {
      navigate("/stadium");
    } else if (
      ["exercise", "info", "commander", "test", "facilities"].includes(prevCategory.id)
    ) {
      navigate("/first-choose", { state: prevCategory });
    } else {
      navigate("/second-choose", { state: prevCategory });
    }
  };

  return (
    <div className="main-text">
      <button className="back-btn" onClick={backButton}>
        <img src={arrow} alt="back-arrow" />
      </button>
      <h1 className="title-main">{selectedButton.text}</h1>
      <div className="text-box">
        {isExercise && (
          <TrainingText
            currText={selectedButton.id}
            catagory={prevCategory.selectedButton.id}
          />
        )}
        {!isExercise && (<RegularText currText={selectedButton.id} />)}
      </div>
    </div>
  );
}

export default MainText;
