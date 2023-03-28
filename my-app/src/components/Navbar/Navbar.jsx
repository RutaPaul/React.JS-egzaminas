import React from "react";
import NavigationLink from "./NavigationLink";
import "./navbar.css";

const Navbar = () => {
    return (
        <div className="navbar">
            <NavigationLink text="" icon="fa-solid fa-circle-arrow-left"/>
            <NavigationLink text="Lakefront" icon="fa-solid fa-house-tsunami"/>
            <NavigationLink text="Amazing views" icon="fa-solid fa-mountain-sun"/>
            <NavigationLink text="Trending" icon="fa-solid fa-fire"/>
            <NavigationLink text="Domes" icon="fa-solid fa-house-chimney"/>
            <NavigationLink text="Islands" icon="fa-solid fa-campground"/>
            <NavigationLink text="Mansions" icon="fa-solid fa-chess-rook"/>
            <NavigationLink text="Beachfront" icon="fa-solid fa-umbrella-beach"/>
            <NavigationLink text="Treehouses" icon="fa-solid fa-tree-city"/>
            <NavigationLink text="Luxe" icon="fa-brands fa-confluence"/>
            <NavigationLink text="Castles" icon="fa-brands fa-fort-awesome"/>
            <NavigationLink text="OMG!" icon="fa-brands fa-space-awesome"/>
            <NavigationLink text="Creating spaces" icon="fa-solid fa-palette"/>
            <NavigationLink text="Tropical" icon="fa-solid fa-tree"/>
            <NavigationLink text="Tiny homes" icon="fa-solid fa-igloo"/>
            <NavigationLink text="Design" icon="fa-solid fa-paint-roller"/>
            <NavigationLink text="Grand pianos" icon="fa-solid fa-icons"/>
            <NavigationLink text="" icon="fa-solid fa-circle-arrow-right"/>
        </div>
    )
}

export default Navbar;