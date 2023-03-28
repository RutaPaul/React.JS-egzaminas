import React, {useState, useEffect} from 'react';
import './App.css';
import Header from "./components/Header";
import MainWindow from './components/MainWindow';
import Navbar from "./components/Navbar";


function App() {
  const [type, setType] = useState("");
  return (
    <>
        <Header />
        <Navbar type={type} setType={setType}/>
        <MainWindow type={type}/>
    </>
  );
}

export default App;
