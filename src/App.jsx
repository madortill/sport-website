import { useState } from 'react'
import './style/App.css'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Stadium from './pages/Stadium'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <div className='bahad-symbols'>
        <img src="src/assets/images/mifkada2.svg" alt="mifkada" className='symbol' />
        <img src="src/assets/images/bahad8-2.svg" alt="bahd8" className='symbol' />
      </div>
      <img src="src/assets/images/til.svg" alt="til" className='til-logo'/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stadium" element={<Stadium />} />
      </Routes>
    </div>
  )
}

export default App
