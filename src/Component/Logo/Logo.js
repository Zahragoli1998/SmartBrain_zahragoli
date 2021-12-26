import React from "react";
import './Logo.css';
import Tilt from "react-tilt";
import brain from './brain.png';

const Logo =()=>{
  return(
   <div className="tiltbox">
      <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }}  >
         <div className="Tilt-inner pa3"><img className="img" src={brain} /></div>
      </Tilt>
   </div>
  )
}
export default Logo;
