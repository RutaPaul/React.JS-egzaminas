import React, {useState, useEffect} from "react";
import {getFlats} from "../../utils/api";
import DataCard from "./DataCard";
import './mainWindow.css';

const MainWindow = (props) => {

    const [flats, setFlats] = useState(null);

    const getFlatsList = async () =>{
        let data = await getFlats();
        if(data){
            setFlats(data);
        }
    }


    useEffect(()=>{
        getFlatsList();
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
