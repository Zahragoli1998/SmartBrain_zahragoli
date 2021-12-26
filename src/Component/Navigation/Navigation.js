import React from "react";
import './Navigation.css';

const Navigation =({onRouteChange,isSingedin})=>{
  if(isSingedin){
    return(
      <nav className="sing">
        <p className="singout" onClick={()=>onRouteChange('singout')}> Sing out</p>
      </nav>
    )
  }else{
    return(
      <nav className="sing">
        <p className="singout" onClick={()=>onRouteChange('singin')}> Singin</p>
        <p className="singout" onClick={()=>onRouteChange('register')}>Register</p>
      </nav>
    )
  }
}
export default Navigation;
