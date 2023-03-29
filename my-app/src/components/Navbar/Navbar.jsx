import React, {useState, useEffect} from "react";
import NavigationLink from "./NavigationLink";
import "./navbar.css";

const Navbar = (props) => {
    const [visiblePositions, setVisiblePositions] = useState([0,1,2,3,4,5,6,7,8,9]);
    
    const availableLinks =  [
        {
            positon: 0,
            key: "Lakefront",
            icon: "fa-solid fa-house-tsunami"
        },
        {
            positon: 1,
            key: "Amazing views",
            icon: "fa-solid fa-mountain-sun"
        },
        {
            positon: 2,
            key: "Trending",
            icon: "fa-solid fa-fire"
        },
        {
            positon: 3,
            key: "Domes",
            icon: "fa-solid fa-house-chimney"
        },
        {
            positon: 4,
            key: "Islands",
            icon: "fa-solid fa-campground"
        },
        {
            positon: 5,
            key: "Mansions",
            icon: "fa-solid fa-chess-rook"
        },
        {
            positon: 6,
            key: "Beachfront",
            icon: "fa-solid fa-umbrella-beach"
        },
        {
            positon: 7,
            key: "Treehouses",
            icon: "fa-solid fa-tree-city"
        },
        {
            positon: 8,
            key: "Luxe",
            icon: "fa-brands fa-confluence"
        },
        {
            positon: 9,
            key: "Castles",
            icon: "fa-brands fa-fort-awesome"
        },
        {
            positon: 10,
            key: "OMG!",
            icon: "fa-brands fa-space-awesome"
        },
        {
            positon: 11,
            key: "Creating spaces",
            icon: "fa-solid fa-palette"
        },
        {
            positon: 12,
            key: "Tropical",
            icon: "fa-solid fa-tree"
        },
        {
            positon: 13,
            key: "Tiny homes",
            icon: "fa-solid fa-igloo"
        },
        {
            positon: 14,
            key: "Design",
            icon: "fa-solid fa-paint-roller"
        },
        {
            positon: 15,
            key: "Grand pianos",
            icon: "fa-solid fa-icons"
        }
    ]

    const allPositions = availableLinks.map(el=>el.positon);
    
    return (
        <div className="navbar">

            <NavigationLink text="LEFT" icon="fa-solid fa-circle-arrow-left" divClass="navLink" setType={props.setType} isHidden={false} 
                setVisiblePositions={setVisiblePositions} visiblePositions={visiblePositions} allPositions={allPositions}
            />
            {
                availableLinks.map(el => (
                    props.type === el.key ?
                    <NavigationLink text={el.key} icon={el.icon} divClass="navLinkActive" setType={props.setType}  isHidden={!visiblePositions.includes(el.positon)}/>
                    : 
                    <NavigationLink text={el.key} icon={el.icon} divClass="navLink" setType={props.setType}  isHidden={!visiblePositions.includes(el.positon)}/>
                ))
            }
            <NavigationLink text="RIGHT" icon="fa-solid fa-circle-arrow-right" divClass="navLink" setType={props.setType} isHidden={false} 
                setVisiblePositions={setVisiblePositions} visiblePositions={visiblePositions} allPositions={allPositions}
            />

        </div>
    )
}

export default Navbar;