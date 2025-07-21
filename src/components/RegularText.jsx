import React from 'react';
import textData from "../data/textData.json";

function RegularText({currText}) {
  const text = textData[`${currText}Text`];
  if (text === undefined) {
    return null;
  }
  return (
    <>
      {text.map((item, i) => {
        if (item.type === 'image') {
          return <img key={i} className='image-text' src={item.src} alt={item.alt || ""}/>
        } else {
          return <p  key={i} className={item.type}>{item.text}</p>
        }
      })}
    </>
  )
}

export default RegularText
