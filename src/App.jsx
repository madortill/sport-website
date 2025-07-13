import { useState } from "react";
import "./style/App.css";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Stadium from "./pages/Stadium";
import FirstChoose from "./pages/FirstChoose";
import SecondChoose from "./pages/SecondChoose";
import MainText from "./pages/mainText";

import mifkada from "./assets/images/mifkada2.svg";
import bahad8 from "./assets/images/bahad8-2.svg";
import til from "./assets/images/til.svg";

function App() {
  const [count, setCount] = useState(0);
  const location = useLocation();
  const currentPath = location.pathname;

  const changeBackground = currentPath === "/" ? "home-background" : "";

  return (
    <div className={`app ${changeBackground}`}>
      <div className="bahad-symbols">
        <img src={mifkada} alt="mifkada" className="symbol" />
        <img src={bahad8} alt="bahd8" className="symbol" />
      </div>
      <img src={til} alt="til" className="til-logo" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stadium" element={<Stadium />} />
        <Route path="/first-choose" element={<FirstChoose />} />
        <Route path="/second-choose" element={<SecondChoose />} />
        <Route path="/main-text" element={<MainText />} />  
      </Routes>
    </div>
  );
}

export default App;
