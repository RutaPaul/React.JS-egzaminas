import React, {useState, useEffect} from "react";
import NavigationLink from "./NavigationLink";
import "./navbar.css";

const Navbar = (props) => {
    useEffect(()=>{
    })
    return (
        <div className="navbar">
            <NavigationLink text="" icon="fa-solid fa-circle-arrow-left" setType={props.setType}/>
            <NavigationLink text="Lakefront" icon="fa-solid fa-house-tsunami" setType={props.setType}/>
            <NavigationLink text="Amazing views" icon="fa-solid fa-mountain-sun" setType={props.setType}/>
            <NavigationLink text="Trending" icon="fa-solid fa-fire" setType={props.setType}/>
            <NavigationLink text="Domes" icon="fa-solid fa-house-chimney" setType={props.setType}/>
            <NavigationLink text="Islands" icon="fa-solid fa-campground" setType={props.setType}/>
            <NavigationLink text="Mansions" icon="fa-solid fa-chess-rook" setType={props.setType}/>
            <NavigationLink text="Beachfront" icon="fa-solid fa-umbrella-beach" setType={props.setType}/>
            <NavigationLink text="Treehouses" icon="fa-solid fa-tree-city" setType={props.setType}/>
            <NavigationLink text="Luxe" icon="fa-brands fa-confluence" setType={props.setType}/>
            <NavigationLink text="Castles" icon="fa-brands fa-fort-awesome" setType={props.setType}/>
            <NavigationLink text="OMG!" icon="fa-brands fa-space-awesome" setType={props.setType}/>
            <NavigationLink text="Creating spaces" icon="fa-solid fa-palette" setType={props.setType}/>
            <NavigationLink text="Tropical" icon="fa-solid fa-tree" setType={props.setType}/>
            <NavigationLink text="Tiny homes" icon="fa-solid fa-igloo" setType={props.setType}/>
            <NavigationLink text="Design" icon="fa-solid fa-paint-roller" setType={props.setType}/>
            <NavigationLink text="Grand pianos" icon="fa-solid fa-icons" setType={props.setType}/>
            <NavigationLink text="" icon="fa-solid fa-circle-arrow-right" setType={props.setType}/>
        </div>
    )
}

export default Navbar;