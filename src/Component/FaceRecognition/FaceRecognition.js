import React from "react";
import './FaceRecognition.css';

const FaceRecognition = ({imageUrl,box})=>{
  console.log(box);
  const top= box.topRow;
  const bottom= box.bottomRow;
  const right= box.rightCol;
  const left= box.leftCol;
  return(
    <div className="imagebox">
      <div className="image">
       <img  id="inputimage" src={imageUrl}/> 
       <div className="bounding-box" style={{top:top, bottom:bottom,right: right,left: left}}></div>
      </div>
    </div>
  )
}
export default FaceRecognition;