import './Balloons.css'
import { useState } from 'react';
export const Balloons = () => {
  const [clickedBalloon, setClickedBallon] = useState("")
  const handleClick = (e:any) => {
    setClickedBallon(e.target.value)
  }
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "W",
    "x",
    "y",
    "z",
    "å",
    "ä",
    "ö",
  ];
  

return(
  <div className="balloon">
    {alphabet.map((word) => {return <div className='box' key={word} onClick={handleClick}>{word.toUpperCase()}</div>})}
  </div>

)

  
};