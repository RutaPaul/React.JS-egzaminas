import React, {useState, useEffect} from 'react';
import MainWindow from '../../components/MainWindow';
import Navbar from "../../components/Navbar";
import Filter from "../../components/Filter";

function Main() {
  const [type, setType] = useState("initialType");
  return (
    <>
        <div className='navbarmenu'>
          <Navbar type={type} setType={setType}/>        
          <Filter />
        </div>
        <MainWindow type={type}/>
    </>
  );
}

export default Main;
