import React, {useState, useEffect} from 'react';
import './App.css';
import Header from "./components/Header";
import MainWindow from './components/MainWindow';
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";

function App() {
  const [type, setType] = useState("initialType");
  return (
    <>
        <Header />
        <div className='navbarmenu'>
          <Navbar type={type} setType={setType}/>
          <Filter />
        </div>
        <MainWindow type={type}/>
    </>
  );
}

export default App;
