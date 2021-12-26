import React from "react";
import './ImageLinkForm.css';

const ImageLinkForm =({onInputChange,onButtonSumbit})=>{
  return(
    <div>
      <p className="paragraph">
        {'This Magic Brain will detect faces in your pictures. Git it a picture'}
      </p>
         <div className="center">
           <div className=" box center">
             <input className="input" onChange={onInputChange}/>
             <button className="btn" 
             onClick={onButtonSumbit}>Detect</button>
            </div> 
         </div>
    </div>
  )
}
export default ImageLinkForm;
