import React from "react";
import './FaceRecognition.css';
import BoundingBox from "./BoundingBox";

const FaceRecognition = ({imageUrl,facePosition})=>{
  console.log(facePosition);

  return(
    <div className="imagebox">
      <div className="image">
       <img  id="inputimage" src={imageUrl}/> 
      <BoundingBox
      facePosition={facePosition}/>
      </div>
    </div>
  )
}
export default FaceRecognition;
