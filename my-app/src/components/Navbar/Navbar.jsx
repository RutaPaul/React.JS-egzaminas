import React from "react";
import Icon from "../Icon";
import NavigationLink from "./NavigationLink";
import "./navbar.css";

const Navbar = () => {
    return (
        <div>
            <NavigationLink text="Lakefront" icon="" link="test" linkClass={linkClass}/>
        </div>
    )
}

export default Navbar;