import React from "react";
import logoUrl from "../Icon/Airbnb.jpg";
import Icon from "../Icon";
import "./header.css";

const Header = () => {
   return(
    <>
    <div className="header">
        <div className="leftHeader"> 
            <img src={logoUrl} alt="Airbnb"/>
        </div>
        <div className="middleHeader">
                Anywhere   
                Any week
                Add guest
            <Icon icon="fa-solid fa-magnifying-glass"/>
        </div>
        <div className="rightHeader">
                Airbnb your home
                <Icon icon="fa-solid fa-globe"/>
                <Icon icon="fa-solid fa-bars"/>
                <Icon icon="fa-solid fa-circle-user"/>
        </div>
    </div>
    </>
   )
}

export default Header;
