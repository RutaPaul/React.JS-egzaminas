import React, {useState, useEffect} from "react";
import NavigationLink from "./NavigationLink";
import "./navbar.css";

const Navbar = (props) => {
    const [visiblePositions, setVisiblePositions] = useState([]);

    const availableLinks =  [
        {
            positon: 0,
            key: "",
            icon: "sss"
        },
        {
            positon: 1,
            key: "Lakefront",
            icon: "sss"
        },
        {
            positon: 2,
            key: "Amazing views",
            icon: "sss"
        },
        {
            positon: 3,
            key: "",
            icon: "sss"
        }
    ]




    return (




        <div className="navbar">
            {
                availableLinks.map(el => (
                    props.type === el.key ?
                    <NavigationLink text={el.key} icon={el.icon} divClass="navLinkActive" setType={props.setType}  isHidden={visiblePositions.includes(el.positon)}/>
                    : 
                    <NavigationLink text={el.key} icon={el.icon} divClass="navLink" setType={props.setType}  isHidden={visiblePositions.includes(el.positon)}/>
                ))
            }


            <NavigationLink text="" icon="fa-solid fa-circle-arrow-left" divClass="navLink" setType={props.setType} isHidden={false}/>
            {
                props.type === "Lakefront" ?
                <NavigationLink text="Lakefront" icon="fa-solid fa-house-tsunami" divClass="navLinkActive" setType={props.setType}  isHidden={true}/>
                : 
                <NavigationLink text="Lakefront" icon="fa-solid fa-house-tsunami" divClass="navLink" setType={props.setType}  isHidden={true}/>
            }
            {
                props.type === "Amazing views" ?
                <NavigationLink text="Amazing views" icon="fa-solid fa-mountain-sun" divClass="navLinkActive" setType={props.setType}  isHidden={true}/>
                : 
                <NavigationLink text="Amazing views" icon="fa-solid fa-mountain-sun" divClass="navLink" setType={props.setType}  isHidden={true}/>
            }
            {
                props.type === "Trending" ?
                <NavigationLink text="Trending" icon="fa-solid fa-fire" divClass="navLinkActive" setType={props.setType}  isHidden={true}/>
                :
                <NavigationLink text="Trending" icon="fa-solid fa-fire" divClass="navLink" setType={props.setType}  isHidden={true}/>
            }
            {
                props.type === "Domes" ?
                <NavigationLink text="Domes" icon="fa-solid fa-house-chimney" divClass="navLinkActive" setType={props.setType}  isHidden={true}/>
                :
                <NavigationLink text="Domes" icon="fa-solid fa-house-chimney" divClass="navLink" setType={props.setType}  isHidden={true}/>
            }
            {
                props.type === "Islands" ?
                <NavigationLink text="Islands" icon="fa-solid fa-campground" divClass="navLinkActive" setType={props.setType}  isHidden={true}/>
                :
                <NavigationLink text="Islands" icon="fa-solid fa-campground" divClass="navLink" setType={props.setType}  isHidden={true}/>
            }
            {
                props.type === "Mansions" ?
                <NavigationLink text="Mansions" icon="fa-solid fa-chess-rook" divClass="navLinkActive" setType={props.setType}  isHidden={true}/>
                :
                <NavigationLink text="Mansions" icon="fa-solid fa-chess-rook" divClass="navLink" setType={props.setType}  isHidden={true}/>
            }
            {
                props.type === "Beachfront" ?
                <NavigationLink text="Beachfront" icon="fa-solid fa-umbrella-beach" divClass="navLinkActive" setType={props.setType}  isHidden={false}/>
                :
                <NavigationLink text="Beachfront" icon="fa-solid fa-umbrella-beach" divClass="navLink" setType={props.setType}  isHidden={false}/>
            }
            {
                props.type === "Treehouses" ?
                <NavigationLink text="Treehouses" icon="fa-solid fa-tree-city" divClass="navLinkActive" setType={props.setType}  isHidden={false}/>
                :
                <NavigationLink text="Treehouses" icon="fa-solid fa-tree-city" divClass="navLink" setType={props.setType}  isHidden={false}/>
            }
            {
                props.type === "Luxe" ?
                <NavigationLink text="Luxe" icon="fa-brands fa-confluence" divClass="navLinkActive" setType={props.setType}  isHidden={false}/>
                :
                <NavigationLink text="Luxe" icon="fa-brands fa-confluence" divClass="navLink" setType={props.setType}  isHidden={false}/>
            }
            {
                props.type === "Castles" ?
                <NavigationLink text="Castles" icon="fa-brands fa-fort-awesome" divClass="navLinkActive" setType={props.setType}  isHidden={false}/>
                :
                <NavigationLink text="Castles" icon="fa-brands fa-fort-awesome" divClass="navLink" setType={props.setType}  isHidden={false}/>
            }
            {
                props.type === "OMG!" ?
                <NavigationLink text="OMG!" icon="fa-brands fa-space-awesome" divClass="navLinkActive" setType={props.setType}  isHidden={false}/>
                :
                <NavigationLink text="OMG!" icon="fa-brands fa-space-awesome" divClass="navLink" setType={props.setType}  isHidden={false}/>
            }
            {
                props.type === "Creating spaces" ?
                <NavigationLink text="Creating spaces" icon="fa-solid fa-palette" divClass="navLinkActive" setType={props.setType}  isHidden={false}/>
                :
                <NavigationLink text="Creating spaces" icon="fa-solid fa-palette" divClass="navLink" setType={props.setType}  isHidden={false}/>
            }
            {
                props.type === "Tropical" ?
                <NavigationLink text="Tropical" icon="fa-solid fa-tree" divClass="navLinkActive" setType={props.setType}  isHidden={false}/>
                :
                <NavigationLink text="Tropical" icon="fa-solid fa-tree" divClass="navLink" setType={props.setType}  isHidden={false}/>
            }
            {
                props.type === "Tiny homes" ?
                <NavigationLink text="Tiny homes" icon="fa-solid fa-igloo" divClass="navLinkActive" setType={props.setType}  isHidden={false}/>
                :
                <NavigationLink text="Tiny homes" icon="fa-solid fa-igloo" divClass="navLink" setType={props.setType}  isHidden={false}/>
            }
            {
                props.type === "Design" ?
                <NavigationLink text="Design" icon="fa-solid fa-paint-roller" divClass="navLinkActive" setType={props.setType}  isHidden={false}/>
                :
                <NavigationLink text="Design" icon="fa-solid fa-paint-roller" divClass="navLink" setType={props.setType}  isHidden={false}/>
            }
            {
                props.type === "Grand pianos" ?
                <NavigationLink text="Grand pianos" icon="fa-solid fa-icons" divClass="navLinkActive" setType={props.setType}  isHidden={false}/>
                :
                <NavigationLink text="Grand pianos" icon="fa-solid fa-icons" divClass="navLink" setType={props.setType}  isHidden={false}/>
            }

            <NavigationLink text="" icon="fa-solid fa-circle-arrow-right" divClass="navLink" setType={props.setType}  isHidden={false}/>
        </div>
    )
}

export default Navbar;