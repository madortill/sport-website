import React from "react";
import "../style/Load.css";

function Load() {
  return (
    <div className="wrapper">
      <div className="running">
        <div className="outer">
          <div className="body">
            <div className="arm behind"></div>
            <div className="arm front"></div>
            <div className="leg behind"></div>
            <div className="leg front"></div>
          </div>
        </div>
      </div>
      <div className="loader"></div>
      <div className="loadText">מתחילים לרוץ ...</div>
    </div>
  );
}

export default Load;
