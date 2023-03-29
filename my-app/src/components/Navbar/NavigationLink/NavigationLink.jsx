import React, {useState, useEffect} from "react";
import "./navigationlink.css";

const NavigationLink = ({text, icon, divClass, setType, isHidden, setVisiblePositions, visiblePositions, allPositions}) => {

    return (
        isHidden ? "" :
        <div className={divClass} onClick={()=>{
            switch(text){
                case "LEFT" :
                    if(visiblePositions[0] == allPositions[0]) return;
                    visiblePositions.pop();
                    visiblePositions.unshift(visiblePositions[0]-1);
                    setVisiblePositions(FixVisibleArray(allPositions,visiblePositions));
                    break;
                case "RIGHT" :
                    if(visiblePositions[visiblePositions.length-1] == allPositions[allPositions.length-1]) return;
                    visiblePositions.shift();
                    visiblePositions.push(visiblePositions[visiblePositions.length-1]+1);
                    setVisiblePositions(FixVisibleArray(allPositions,visiblePositions));
                    break;
                default :
                    setType(text)
                    break;
            }
            }} >
             <div className="navLinkIcon">
                <i className={icon} />
            </div>
            <div className="navLinkText">
                {text == "LEFT" ? "" : text == "RIGHT" ? "" : text }
            </div>
        </div>
        
    )
}

function FixVisibleArray (allPositions, visiblePositions) {
    const newVisiblePositions = [];
        
    visiblePositions.forEach(pos=>{
        if(!allPositions.includes(pos)){
            if(pos < 0){
                pos = allPositions[allPositions.length-1];
            }

            if(pos >= allPositions.length){
                pos = allPositions[0];
            }

            newVisiblePositions.push(pos);
        }
        else {
            newVisiblePositions.push(pos);
        }
    })

    return newVisiblePositions;
}

export default NavigationLink;