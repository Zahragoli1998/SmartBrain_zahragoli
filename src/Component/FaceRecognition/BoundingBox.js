import React from "react";
import './FaceRecognition.css'

const BoundingBox = ({facePosition}) =>{
    console.log(facePosition)

    return(
           <div>
                    {facePosition.map((item,i)=>(
                        <div className='bounding-box' 
                        style={{top:facePosition[i].topRow,
                            bottom:facePosition[i].bottomRow,
                            right: facePosition[i].rigthCol,
                            left: facePosition[i].leftCol}}>
                        </div>
                    )
                )
            }
        </div>
    
    )
}
export default BoundingBox;