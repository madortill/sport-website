import React from "react";
import "../style/Home.css";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Home() {
  const [showAbout, setShowAbout] = useState(false);
  const navigate = useNavigate();

  const toggleAbout = () => {
    setShowAbout((prev) => !prev);
  };

  const nextPage = () => {
    navigate("/stadium");
  }

  return (
    <div className="home">
      <button className="about-btn" onClick={toggleAbout}>i</button>
      <div className={`div-about ${showAbout ? "fade-in" : "fade-out"}`}>
        {showAbout && (
          <>
            <h3 className="list-text-about">מפתחת ראשית:</h3>
            <p className="list-text-about">טוראי גילי נחום</p>
            <h3 className="list-text-about">גרפיקה:</h3>
            <p className="list-text-about">טוראי גילי נחום</p>
            <h3 className="list-text-about">מומחת תוכן:</h3>
            <p className="list-text-about">ליהי מדאגית</p>
            <h3 className="list-text-about">רמ"ד טי"ל:</h3>
            <p className="list-text-about">רס"מ עדן בן חמו</p>
            <h3 className="list-text-about">גרסה:</h3>
            <p className="list-text-about">יולי 2025</p>
          </>
        )}
      </div>
      <p className="title-home">אתר הכושר של קריית ההדרכה</p>
      <button className="start-btn" onClick={nextPage}>בואו נרוץ על זה!</button>
    </div>
  );
}

export default Home;
