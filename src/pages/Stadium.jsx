import React from 'react'
import "../style/Stadium.css";
import RoundButton from '../components/RoundButton';

function Stadium() {
  return (
    <div className='stadium'>
      <img src="src/assets/images/stadium-img.svg" alt="stadium" className='stadium-img' />
      <RoundButton groupName="stadiumButtons"/>
    </div>
  )
}

export default Stadium
