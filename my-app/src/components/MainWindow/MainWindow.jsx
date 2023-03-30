import React, {useState, useEffect} from "react";
import {getFlats} from "../../utils/api";
import DataCard from "./DataCard";
import './mainWindow.css';

const MainWindow = (props) => {

    const getFlatsList = async () =>{
        let data = await getFlats();
        if(data){
            setFlats(data);
        }
    }
    
    const [flats, setFlats] = useState(null);

    useEffect(()=>{
        if(props.type === "initialType"){
            getFlatsList();
        }else if(props.type === "Castles"){
            if(flats)
                setFlats([flats[0],flats[1]])
            else 
                getFlatsList();
        }
        else {
            setFlats(null);
        }
        
    })

    return(
        <div className="mainWindow">
            {
                flats ? flats.map(el => (
                    <DataCard 
                        id = {el.id}
                        name = {el.name}
                        imageUrl = {el.imageUrl}
                        price = {el.price}
                        priceCurrency = {el.priceCurrency}
                        lat = {el.lat}
                        lng = {el.lng}
                    />
                )) : <div>No listings available</div>
            }
        </div>
    )
 }

export default MainWindow;
