import React from 'react';
import './App.css';
import Header from "./components/Header";
import MainWindow from './components/MainWindow';
import Navbar from "./components/Navbar";


function App() {
  return (
    <>
        <Header />
        <Navbar />
        <MainWindow currentState={"TEST"}/>
    </>
  );
}

export default App;
