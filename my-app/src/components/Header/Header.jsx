import React, {useState} from "react";
import logoUrl from "../Icon/Airbnb.jpg";
import Icon from "../Icon";
import { getHomePageUrl } from '../../utils/api';
import "./header.css";

const Header = () => {
    const [profileVisible, setProfileVisibility] = useState(false); 
    return(
        <>
        <div className="header">
            <div className="leftHeader"> 
                <img src={logoUrl} alt="Airbnb" onClick={()=>{window.location.href = getHomePageUrl()}}/>
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
                <div className="profile" onClick={()=>{setProfileVisibility(!profileVisible)}}>
                    <div>
                        <Icon icon="fa-solid fa-bars"/>
                    </div>
                    <div>
                        <Icon icon="fa-solid fa-circle-user"/>
                    </div>
                </div>
            </div>
            {
                profileVisible ? 
                <div class="profilePanel">
                    <div>
                        Signup
                    </div>
                    <div>
                        Login
                    </div>
                </div>
                :
                ""
            }
        </div>
        </>
    )
}

export default Header;
