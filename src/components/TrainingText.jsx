import React from 'react'
import textData from "../data/textData.json";

function TrainingText({currText, catagory}) {
    const text = textData[`${catagory}Text`][currText];
  return (
    <>
      <p className='focus'><span className='mini-title'>מטרה:</span> {text.focus}</p>
      <p className='level'><span className='mini-title'>רמת קושי:</span> {text.level}</p>
      <p className='workout-length'><span className='mini-title'>משך זמן האימון:</span> {text.workoutLength}</p>
      <p className='warmup'><span className='mini-title'>חימום:</span> <br/> {text.warmup}</p>
      <p className='training'><span className='mini-title'>האימון:</span> <br/> {text.training}</p>
      <p className='end'><span className='mini-title'>סיום:</span> <br/> {text.end}</p>
    </>
  )
}

export default TrainingText
