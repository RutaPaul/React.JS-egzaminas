import React from "react"
import "./dataCard.css"

const DataCard = (props) => {
    return (
        <div class="DataCard">
            <div class="DataCardImage">
            <img 
                src={props.imageUrl}
                alt="new"
            />
            </div>
            <div class="DataCardInfo">
                {props.name}
                <br></br>
                {props.price}
            </div>
        </div>
    )
}

export default DataCard;