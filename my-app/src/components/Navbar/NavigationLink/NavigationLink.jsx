import React from "react";

const NavigationLink = ({text, icon, linkClass}) => {
    return (
        <div className={linkClass}>
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