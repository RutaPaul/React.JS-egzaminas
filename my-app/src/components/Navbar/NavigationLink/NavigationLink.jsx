import React from "react";

const NavigationLink = ({text, icon, linkClass, setType}) => {
    return (
        <div className={linkClass} onClick={()=>{
            if(text == "Castles"){
                setType("flats");
            } else {
                setType("NONE");
            }
        }} >
             <div className="navLink">
                <i className={icon} />
            </div>
            <div className="navLinkText">
                {text}
            </div>
        </div>
        
    )
}

export default NavigationLink;