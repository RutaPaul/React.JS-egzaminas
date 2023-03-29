import React, {useState, useEffect} from "react";
import "./navigationlink.css";

const NavigationLink = ({text, icon, divClass, setType, isHidden}) => {

    return (
        isHidden ? "" :
        <div className={divClass} onClick={()=>{
            setType(text);
            }} >
             <div className="navLinkIcon">
                <i className={icon} />
            </div>
            <div className="navLinkText">
                {text}
            </div>
        </div>
        
    )
}

export default NavigationLink;