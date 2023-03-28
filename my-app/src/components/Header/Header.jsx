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
                <div className="bolded">Anywhere</div>   
                <div className="bolded">Any week</div>
                <div className="fainted">Add guest</div>
                <div className="magnifyingGlass">
                    <Icon icon="fa-solid fa-magnifying-glass"/>
                </div>
        </div>
        <div className="rightHeader">
            <div>
                Airbnb your home
            </div>
            <div>
                <Icon icon="fa-solid fa-globe"/>
            </div>
            <div className="profile">
                <Icon icon="fa-solid fa-bars"/>
                <Icon icon="fa-solid fa-circle-user"/>
            </div>
        </div>
    </div>
    </>
   )
}

export default Header;
