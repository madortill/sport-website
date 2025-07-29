import React from 'react';
import textData from "../data/textData.json";
import "../style/MainText.css";

const images = import.meta.glob("/src/assets/images/*", {
  eager: true,
  import: "default",
});

function RegularText({currText}) {
  const text = textData[`${currText}Text`];
  if (text === undefined) {
    return null;
  }
  return (
    <>
      {text.map((item, i) => {
        if (item.type === 'image') {
          const imgSrc = images[`/src/assets/images/${item.src}`];
          return <img key={i} className='image-text' src={imgSrc} alt={item.alt || ""}/>
        } else if (item.type === 'link') {
          return <a href={item.src}>{item.text}</a>
        } else {
          return <p  key={i} className={item.type}>{item.text}</p>
        }
      })}
    </>
  )
}

export default RegularText
