import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColour = ({ rgb, weight, index, hexColour }) => {
  const [alert,setAlert] = useState(false);
  const bcg = rgb.join(',');
  const hex = rgbToHex(...rgb);

  useEffect(()=> {
    const timeout = setTimeout (() => {
      setAlert(false);
    },3000);
    return () => clearTimeout(timeout)
  },[alert])

  return (
    <article className={`colour ${index > 5 && 'colour-light'}`} 
    style={{backgroundColor: `rgb(${bcg})`}}
    onClick={()=>{
      setAlert(true);
      navigator.clipboard.writeText(hex);
      }}>
      <p className="percent-value">{weight}%</p>
      <p className="colour-value">{hex}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
    
  );
}

export default SingleColour;
